const { verifyToken } = require("./util/auth");
const { getPosts, createPost } = require("./util/posts");
const { getUserById } = require("./util/users");
const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const app = express();
const port = 3001;
require("./db/initialize");

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", verifyToken, async (req, res) => {
  // fetch posts from server
  let posts;
  try {
    posts = await getPosts();
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "An error occurred while fetching posts",
    });
  }

  res.status(200).json(posts);
});

app.post("/", verifyToken, async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const user = await getUserById(user_id);
    if (!user) {
      throw createError(500, "User not found");
    }

    const content = req.body.content;
    if (!content) {
      throw createError(400, "No post content found");
    }

    const post = await createPost(user, content);

    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

// error handler
app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

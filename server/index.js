const { verifyToken } = require("./util/auth");
const { getPosts } = require("./util/posts");
const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const app = express();
const port = 3001;

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

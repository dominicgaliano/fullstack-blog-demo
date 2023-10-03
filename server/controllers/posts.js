const { getPosts, createPost, getPost } = require("../util/posts");
const { getUserById } = require("../util/users");
const createError = require("http-errors");

const getPostsController = async (req, res) => {
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
};

const createPostController = async (req, res, next) => {
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
};

const getPostByIdController = async (req, res, next) => {
  try {
    const post_id = req.params.id;
    if (!post_id) {
      throw createError(404, "No post found");
    }

    const post = await getPost(post_id);
    if (!post) {
      throw createError(404, "No post found");
    }

    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};
const updatePostByIdController = async (req, res, next) => {
  try {
    // validate input
    const user_id = req.user_id;
    const post_id = req.params.id;
    const content = req.body.content;
    if (!user_id) {
      throw createError(500, "User not found");
    }
    if (!post_id) {
      throw createError(404, "No post found");
    }
    if (!content) {
      throw createError(400, "No post content");
    }

    // validate that user requesting update is post owner
    if (post.author.user_id != user_id) {
      throw createError(403);
    }

    // update post
    const post = await updatePost(post_id, content);
    if (!post) {
      throw createError(404, "No post found");
    }

    const newPost = await getPost(post_id);

    res.status(200).json(newPost);
  } catch (err) {
    next(err);
  }
};
const deletePostByIdController = async (req, res, next) => {};

module.exports = {
  getPostsController,
  createPostController,
  getPostByIdController,
  updatePostByIdController,
  deletePostByIdController,
};

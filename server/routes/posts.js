const {
  getPostsController,
  createPostController,
  getPostByIdController,
  updatePostByIdController,
  deletePostByIdController,
} = require("../controllers/posts");

const express = require("express");
const router = express.Router();

router.use("/:id/comments", require("./comments"));

router.get("/", getPostsController);

router.post("/", createPostController);

router.get("/:id", getPostByIdController);

router.put("/:id", updatePostByIdController);

router.delete("/:id", deletePostByIdController);

module.exports = router;

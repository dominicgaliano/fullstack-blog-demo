const {
  getPostsController,
  createPostController,
  getPostByIdController,
  updatePostByIdController,
  deletePostByIdController,
} = require("../controllers/posts");

const express = require("express");
const router = express.Router();

router.get("/", getPostsController);

router.post("/", createPostController);

router.get("/:id", getPostByIdController);

router.put("/:id", updatePostByIdController);

router.delete("/:id", deletePostByIdController);

router.use("/:id/comments", require("./comments"));

module.exports = router;

const {
  getPostsController,
  createPostController,
} = require("../controllers/posts");

const express = require("express");
const router = express.Router();

router.get("/", getPostsController);

router.post("/", createPostController);

router.get("/:id", getPostByIdController);

router.put("/:id", updatePostByIdController);

router.delete("/:id", deletePostByIdController);

// - [ ] POST, PUT, DELETE /posts/:id/comments

module.exports = router;

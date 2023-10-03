const { verifyToken } = require("../util/auth");
const {
  getPostsController,
  createPostController,
} = require("../controllers/posts");

const express = require("express");
const router = express.Router();

router.get("/", verifyToken, getPostsController);

router.post("/", verifyToken, createPostController);

router.get("/:id", verifyToken, getPostByIdController);

router.put("/:id", verifyToken, updatePostByIdController);

router.delete("/:id", verifyToken, deletePostByIdController);

// - [ ] POST, PUT, DELETE /posts/:id/comments

module.exports = router;

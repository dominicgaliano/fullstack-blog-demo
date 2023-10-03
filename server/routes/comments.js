const {
  createCommentController,
  updateCommentByIdController,
  deleteCommentByIdController,
} = require("../controllers/comments");

const express = require("express");
const router = express.Router();

router.post("/", createPostController);

router.put("/:comment_id", updatePostByIdController);

router.delete("/:comment_id", deletePostByIdController);

module.exports = router;

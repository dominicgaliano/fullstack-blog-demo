const {
  createCommentController,
  updateCommentByIdController,
  deleteCommentByIdController,
} = require("../controllers/comments");

const express = require("express");
const router = express.Router();

router.post("/", createCommentController);

router.put("/:comment_id", updateCommentByIdController);

router.delete("/:comment_id", deleteCommentByIdController);

module.exports = router;

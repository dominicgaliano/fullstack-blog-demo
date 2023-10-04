const {
  getCommentsController,
  getCommentController,
  createCommentController,
  updateCommentByIdController,
  deleteCommentByIdController,
} = require("../controllers/comments");

const express = require("express");
const commentsRouter = express.Router({ mergeParams: true });

commentsRouter.get("/", getCommentsController);

commentsRouter.get("/:comment_id", getCommentController);

commentsRouter.post("/", createCommentController);

commentsRouter.put("/:comment_id", updateCommentByIdController);

commentsRouter.delete("/:comment_id", deleteCommentByIdController);

module.exports = commentsRouter;

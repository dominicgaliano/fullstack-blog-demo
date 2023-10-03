const { createComment } = require("../util/comments");
const { getUserById } = require("../util/users");
const createError = require("http-errors");

const createCommentController = async (req, res, next) => {
  try {
    // validate input
    const user = await getUserById(req.user_id);
    const post_id = req.params.id;
    const commentBody = req.body.commentBody;
    if (!user) {
      throw createError(500, "User not found");
    }
    if (!post_id) {
      throw createError(404, "No post found");
    }
    if (!commentBody) {
      throw createError(400, "No post commentBody");
    }

    // create comment
    const modifiedCount = await createComment(user, post_id, commentBody);
    if (!modifiedCount) {
      throw createError(404);
    }

    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};
const updateCommentByIdController = async (req, res, next) => {};
const deleteCommentByIdController = async (req, res, next) => {};

module.exports = {
  createCommentController,
  updateCommentByIdController,
  deleteCommentByIdController,
};

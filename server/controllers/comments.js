const {} = require("../util/comments");

const createCommentController = async (req, res, next) => {
  try {
    // validate input
    const user_id = req.user_id;
    const post_id = req.params.id;
    const commentBody = req.body.commentBody;
    if (!user_id) {
      throw createError(500, "User not found");
    }
    if (!post_id) {
      throw createError(404, "No post found");
    }
    if (!commentBody) {
      throw createError(400, "No post commentBody");
    }

    // create comment
    await createComment(user_id, post_id, commentBody);
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

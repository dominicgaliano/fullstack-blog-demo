const {
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../util/comments");
const { getUserById } = require("../util/users");
const createError = require("http-errors");

const getCommentController = async (req, res, next) => {
  try {
    // validate input
    const post_id = req.params.id;
    const comment_id = req.params.comment_id;
    if (!post_id || !comment_id) {
      throw createError(400);
    }

    const comment = await getComment(post_id, comment_id);
    res.status(200).json(comment);
  } catch (err) {
    next(err);
  }
};

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

const updateCommentByIdController = async (req, res, next) => {
  // validate input
  const user = await getUserById(req.user_id);
  const post_id = req.params.id;
  const comment_id = req.params.comment_id;
  const commentBody = req.body.commentBody;
  if (!user) {
    throw createError(500, "User not found");
  }
  if (!post_id || !commend_id) {
    throw createError(404, "Not found");
  }
  if (!commentBody) {
    throw createError(400, "No post commentBody");
  }

  // TODO: verify that user "owns" comment
  throw createError(501);

  // update comment
  const modifiedCount = await updateComment(post_id, comment_id, commentBody);
  if (!modifiedCount) {
    throw createError(404);
  }

  res.sendStatus(204);
};

const deleteCommentByIdController = async (req, res, next) => {
  // validate input
  const user = await getUserById(req.user_id);
  const post_id = req.params.id;
  const comment_id = req.params.comment_id;
  if (!user) {
    throw createError(500, "User not found");
  }
  if (!post_id || !commend_id) {
    throw createError(404, "No post found");
  }

  // delete comment
  const modifiedCount = await deleteComment(user, post_id, comment_id);
  if (!modifiedCount) {
    throw createError(404);
  }

  res.sendStatus(204);
};

module.exports = {
  getCommentController,
  createCommentController,
  updateCommentByIdController,
  deleteCommentByIdController,
};

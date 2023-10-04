const {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../util/comments");
const { getUserById } = require("../util/users");
const createError = require("http-errors");

const getCommentsController = async (req, res, next) => {
  try {
    // validate input
    const post_id = req.params.id;
    if (!post_id) {
      throw createError(400);
    }

    const comments = await getComments(post_id);
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};

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
  if (!post_id || !comment_id) {
    throw createError(404, "Not found");
  }
  if (!commentBody) {
    throw createError(400, "No post commentBody");
  }

  // verify that user "owns" comment
  const comment = await getComment(post_id, comment_id);
  if (comment.author.user_id != user._id) {
    throw createError(403);
  }

  // update comment
  const newComment = await updateComment(post_id, comment_id, commentBody);
  if (!newComment) {
    throw createError(404);
  }

  res.status(200).json(newComment);
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
  getCommentsController,
  getCommentController,
  createCommentController,
  updateCommentByIdController,
  deleteCommentByIdController,
};

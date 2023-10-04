const createError = require("http-errors");
const Post = require("../models/post_model");

const createComment = async (user, post_id, commentBody) => {
  try {
    const newComment = {
      author: {
        user_id: user._id,
        email: user.email,
      },
      text: commentBody,
    };
    // throw createError(501, "not implemented");
    const res = await Post.updateOne(
      { _id: post_id },
      { $push: { comments: newComment } }
    );
    return res.modifiedCount;
  } catch (err) {
    throw createError(500);
  }
};

const updateComment = async (post_id, comment_id, commentBody) => {
  try {
    const res = await Post.findOneAndUpdate(
      { _id: post_id, "comments._id": comment_id },
      {
        $set: {
          "comments.$.text": commentBody,
        },
      }
    );
    return res.modifiedCount;
  } catch (err) {
    throw createError(500);
  }
};

const deleteComment = async (user, post_id, comment_id) => {
  try {
  } catch (err) {
    throw createError(500);
  }
};

module.exports = { createComment, updateComment, deleteComment };

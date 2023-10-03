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

module.exports = { createComment };

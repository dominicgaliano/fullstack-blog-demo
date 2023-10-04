const createError = require("http-errors");
const Post = require("../models/post_model");

const getComments = async (post_id) => {
  try {
    const post = await Post.findOne({ _id: post_id }, { comments: 1 });
    if (!post) {
      throw createError(404);
    }
    return post;
  } catch (error) {
    console.log(error);
    throw createError(500);
  }
};

const getComment = async (post_id, comment_id) => {
  let post;
  try {
    post = await Post.findOne(
      { _id: post_id, "comments._id": comment_id },
      { "comments.$": 1 }
    );
  } catch (error) {
    throw createError(400);
  }

  // post not found
  if (!post) {
    throw createError(404);
  }
  // post found, return comment
  const comment = post.comments[0];
  return comment;
};

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
    const post = await Post.findOneAndUpdate(
      { _id: post_id, "comments._id": comment_id },
      {
        $set: {
          "comments.$.text": commentBody,
        },
      },
      { new: true, "comments.$": 1 }
    );
    // post not found
    if (!post) {
      throw createError(404);
    }
    // post found, return new comment
    return post.comments.find((comment) => {
      return comment._id.equals(comment_id);
    });
  } catch (err) {
    throw createError(500);
  }
};

const deleteComment = async (post_id, comment_id) => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: post_id, "comments._id": comment_id },
      { $pull: { comments: { _id: comment_id } } }
    );
    if (!post) {
      throw createError(404);
    }
  } catch (err) {
    throw createError(500);
  }
};

module.exports = {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};

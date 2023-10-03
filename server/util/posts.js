const path = require("path");
const fs = require("fs").promises;
const Post = require("../models/post_model");
const createError = require("http-errors");

async function getPosts() {
  return await Post.find({});
}

async function getPost(id) {
  try {
    const post = await Post.findOne({ _id: id });
    return post;
  } catch (err) {
    throw createError(400);
  }
}

async function createPost(user, content) {
  const author = { user_id: user.id, email: user.email };

  const post = new Post({
    author: author,
    content: content,
    comments: [],
    likes: 0,
  });
  const savedPost = await post.save();
  return savedPost;
  // throw new Error("not implemented");
}

async function updatePost(post_id, newContent) {
  try {
    const filter = { _id: post_id };
    const update = { content: newContent };

    const newPost = await Post.findOneAndUpdate(filter, update);
  } catch (err) {
    // catch malformed content or id
    throw createError(400);
  }
}

async function deletePost(post_id) {
  try {
    const res = await Post.deleteOne({ _id: post_id });
    return res.deletedCount === 1;
  } catch (err) {
    throw createError(400);
  }
}

module.exports = { getPosts, createPost, getPost, updatePost, deletePost };

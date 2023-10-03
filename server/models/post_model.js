const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const isEmail = require("validator").isEmail;

const CommentSchema = new Schema({
  author: {
    user_id: String,
    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate: [isEmail, "Please fill a valid email address"],
    },
  },
  text: String,
});

const PostSchema = new Schema(
  {
    author: {
      user_id: String,
      email: {
        type: String,
        trim: true,
        lowercase: true,
        validate: [isEmail, "Please fill a valid email address"],
      },
    },
    content: String,
    timestamp: { type: Date, default: Date.now },
    likes: Number,
    comments: {
      type: [CommentSchema],
    },
  },
  { collection: "posts" }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;

const createError = require("http-errors");

const createComment = async (user, post_id, commentBody) => {
  const newComment = {
    author: {
      user_id: user._id,
      email: user.email,
    },
    text: commentBody,
  };

  throw createError(501, "not implemented");
};

module.exports = { createComment };

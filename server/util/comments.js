const createComment = async (user, post_id, commentBody) => {
  const newComment = {
    comment_id: Number,
    author: {
      user_id: user._id,
      email: user.email,
    },
    text: commentBody,
  };
};

module.exports = { createComment };

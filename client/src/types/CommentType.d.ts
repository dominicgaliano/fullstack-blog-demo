interface CommentType {
  _id: string;
  author: {
    user_id: string;
    email: string;
  };
  text: string;
}

export default CommentType;

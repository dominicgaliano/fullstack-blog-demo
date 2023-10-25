interface Comment {
  _id: string;
  author: {
    user_id: string;
    email: string;
  };
  text: string;
}

export default Comment;

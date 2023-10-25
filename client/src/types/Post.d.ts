import Comment from './Comment';

interface Post {
  _id: string;
  author: {
    user_id: string;
    email: string;
  };
  content: string;
  timestamp: Date;
  likes: number;
  comments: Comment[];
}

export default Post;

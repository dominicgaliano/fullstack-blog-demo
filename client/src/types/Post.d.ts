import CommentType from './CommentType';

interface Post {
  _id: string;
  author: {
    user_id: string;
    email: string;
  };
  content: string;
  timestamp: Date;
  likes: number;
  comments: CommentType[];
}

export default Post;

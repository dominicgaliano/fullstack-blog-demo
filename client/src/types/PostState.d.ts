import { Post } from './Post';

interface PostState {
  loading: boolean;
  posts: Post[];
  error: string | null;
  post: Post | null;
  postCreated: boolean;
}

export default PostState;

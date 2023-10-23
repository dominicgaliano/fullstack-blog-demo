import { Post } from './Post';

interface PostState {
  loading: boolean;
  posts: Post[];
  error: string | null;
}

export default PostState;

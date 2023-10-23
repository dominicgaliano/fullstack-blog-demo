import './PostCard.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { deletePost } from '../actions/postActions';
import { useAppDispatch } from '../app/hooks';
import Post from '../types/Post.d';

export default function PostCard({ post }: { post: Post }) {
  const dispatch = useAppDispatch();

  return (
    <div className="post-card">
      {/* FIXME: included for dev only */}
      <small>
        <i>
          <Link to={`/feed/${post._id}`}>{post._id}</Link>
        </i>
      </small>
      <p>{post.content}</p>
      <p>
        By: {post.author.email} at {post.timestamp}
      </p>
      <p>Likes: {post.likes}</p>
      <button
        onClick={() => {
          if (window.confirm('Are you sure to delete this post?')) {
            dispatch(deletePost(post._id));
          }
        }}
      >
        DELETE
      </button>
    </div>
  );
}

// interface Post {
//   _id: string;
//   author: {
//     user_id: string;
//     email: string;
//   };
//   content: string;
//   timestamp: Date;
//   likes: number;
//   comments: Comment[];
// }

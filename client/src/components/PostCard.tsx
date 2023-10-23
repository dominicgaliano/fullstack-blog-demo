import './PostCard.css';

import { Link } from 'react-router-dom';

import Post from '../types/Post.d';

export default function PostCard({ post }: { post: Post }) {
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

import './PostCard.css';

import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { deletePost, updatePost } from '../actions/postActions';
import { useAppDispatch } from '../app/hooks';
import Post from '../types/Post.d';

export default function PostCard({ post }: { post: Post }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>('');

  return (
    <div className="post-card">
      {/* FIXME: included for dev only */}
      <small>
        <i>
          <Link to={`/feed/${post._id}`}>{post._id}</Link>
        </i>
      </small>
      {isEditing ? (
        <>
          <form>
            <label>
              <input
                type="text"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
              />
            </label>
          </form>
          <button
            onClick={() => {
              const postChanges = { id: post._id, newContent: newContent };
              updatePost(postChanges);
              setIsEditing(false);
            }}
          >
            save
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
            }}
          >
            cancel
          </button>
        </>
      ) : (
        <p>{post.content}</p>
      )}
      <p>
        By: {post.author.email} at {post.timestamp}
      </p>
      <p>Likes: {post.likes}</p>
      {!isEditing && (
        <>
          <button
            onClick={() => {
              setNewContent(post.content);
              setIsEditing(true);
            }}
          >
            UPDATE
          </button>
          <button
            onClick={() => {
              if (window.confirm('Are you sure to delete this post?')) {
                dispatch(deletePost(post._id)).then(() => {
                  // navigate to feed if on individual post
                  console.log(location.pathname);
                  if (location.pathname !== '/feed/') navigate('../feed');
                });
              }
            }}
          >
            DELETE
          </button>
        </>
      )}
    </div>
  );
}

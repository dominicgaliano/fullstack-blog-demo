import './PostCard.css';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { deletePost, updatePost } from '../actions/postActions';
import { useAppDispatch } from '../app/hooks';
import Post from '../types/Post.d';

type Input = {
  content: string;
};

export default function PostCard({ post }: { post: Post }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // form utilities
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ defaultValues: { content: post.content } });

  const onSubmit: SubmitHandler<Input> = (data) => {
    const postChanges = { id: post._id, newContent: data.content };
    dispatch(updatePost(postChanges));
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState<boolean>(false);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="content">Update Post:</label>
            <textarea
              {...register('content', { required: true })}
              placeholder="Post Content"
            />
            {errors.content && <li>This field is required</li>}
            <input type="submit" value="Save Changes" />
          </form>
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

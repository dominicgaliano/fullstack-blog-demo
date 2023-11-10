import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { deletePost, updatePost } from '../actions/postActions';
import { useAppDispatch } from '../app/hooks';
import CommentType from '../types/CommentType';
import Post from '../types/Post.d';
import CommentCard from './CommentCard';
import CreateCommentForm from './CreateCommentForm';

type Input = {
  content: string;
};

export default function PostCard({ post }: { post: Post }) {
  const dispatch = useAppDispatch();

  // form utilities
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ defaultValues: { content: post.content } });

  const onSubmit: SubmitHandler<Input> = (data) => {
    const postChanges = { id: post._id, newContent: data.content };
    setIsEditing(false);
    dispatch(updatePost(postChanges));
  };

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isCreatingComment, setIsCreatingComment] = useState<boolean>(false);

  return (
    <div className="post-card">
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
                dispatch(deletePost(post._id));
              }
            }}
          >
            DELETE
          </button>
          <hr />
          <span>Comments:</span>
          <ul>
            {post.comments &&
              post.comments.map((comment: CommentType) => (
                <CommentCard key={comment._id} postId={post._id} comment={comment} />
              ))}
          </ul>
          {isCreatingComment && (
            <CreateCommentForm
              postId={post._id}
              handleClose={() => setIsCreatingComment(false)}
            />
          )}
          <button onClick={() => setIsCreatingComment(!isCreatingComment)}>
            {isCreatingComment ? 'cancel' : 'create comment'}
          </button>
        </>
      )}
    </div>
  );
}

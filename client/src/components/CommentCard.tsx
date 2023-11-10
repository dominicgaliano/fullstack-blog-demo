import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { deleteComment, updateComment } from '../actions/postActions';
import { useAppDispatch } from '../app/hooks';
import CommentType from '../types/CommentType';

type Input = {
  content: string;
};

export default function CommentCard({
  postId,
  comment,
}: {
  postId: string;
  comment: CommentType;
}) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  // form utilities
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ defaultValues: { content: comment.text } });

  const onSubmit: SubmitHandler<Input> = (data) => {
    const commentChanges = {
      postId: postId,
      commentId: comment._id,
      newContent: data.content,
    };
    setIsEditing(false);
    dispatch(updateComment(commentChanges));
  };

  return (
    <div>
      {comment.author.email}:{' '}
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="content">Update Post:</label>
          <textarea
            {...register('content', { required: true })}
            placeholder="Post Content"
          />
          {errors.content && <li>This field is required</li>}
          <input type="submit" value="Save Changes" />
        </form>
      ) : (
        comment.text
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'cancel' : 'edit'}
      </button>
      <button
        onClick={() =>
          dispatch(deleteComment({ postId: postId, commentId: comment._id }))
        }
      >
        DELETE
      </button>
    </div>
  );
}

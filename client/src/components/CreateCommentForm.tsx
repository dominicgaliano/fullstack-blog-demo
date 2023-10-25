import { SubmitHandler, useForm } from 'react-hook-form';

import { createComment } from '../actions/postActions';
import { useAppDispatch } from '../app/hooks';

type Inputs = {
  content: string;
};

export default function CreateCommentForm({
  postId,
  handleClose,
}: {
  postId: string;
  handleClose: () => void;
}) {
  const dispatch = useAppDispatch();

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(createComment({ postId: postId, newContent: data.content })).then(
      handleClose,
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea {...register('content', { required: true })} />
      {errors.content && <li>This field is required</li>}
      <input type="submit" value="Create Comment" />
    </form>
  );
}

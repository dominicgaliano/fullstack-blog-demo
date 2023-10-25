import { SubmitHandler, useForm } from 'react-hook-form';

import { createComment } from '../actions/postActions';
import { useAppDispatch } from '../app/hooks';

type Inputs = {
  content: string;
};

export default function CreateCommentForm({ handleClose }: { handleClose: () => void }) {
  const dispatch = useAppDispatch();

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // dispatch(createComment(data.content)).then(handleClose);
    console.log(data);
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea {...register('content', { required: true })} />
      {errors.content && <li>This field is required</li>}
      <input type="submit" value="Create Comment" />
    </form>
  );
}

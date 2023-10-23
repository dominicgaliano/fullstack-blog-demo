import { SubmitHandler, useForm } from 'react-hook-form';

import { createPost } from '../actions/postActions';
import { useAppDispatch } from '../app/hooks';

type Inputs = {
  content: string;
};

export default function CreatePostView() {
  // redux utilities
  const dispatch = useAppDispatch();

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(createPost(data.content));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea {...register('content', { required: true })} />
      {errors.content && <li>This field is required</li>}
      <input type="submit" />
    </form>
  );
}

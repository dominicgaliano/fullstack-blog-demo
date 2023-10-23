import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { createPost } from '../actions/postActions';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Post from '../types/Post';

type Inputs = {
  content: string;
};

export default function CreatePostView() {
  // redux utilities
  const { loading, error } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  // react-router utilities
  const navigate = useNavigate();

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(createPost(data.content)).then((res) => {
      const newPost: Post = res.payload;
      navigate(`../feed/${newPost._id}`);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea {...register('content', { required: true })} />
      {errors.content && <li>This field is required</li>}
      <input type="submit" />
      {loading && <p>LOADING...</p>}
      {error || <p>{error}</p>}
    </form>
  );
}

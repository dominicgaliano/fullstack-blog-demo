import './LoginForm.css';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { set } from '../app/tokenSlice';
import LoginInput from '../types/LoginInput';
import { loginUser } from '../util/auth';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();

  const tokens = useSelector((state) => state.tokens.value);
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    const res = await loginUser(data);
    if (res.tokens) {
      console.log(res.tokens);

      // store in redux
      dispatch(set(res.tokens));
    } else {
      alert(res.errorMessage || 'An error occurred.');
      // TODO: convert to visible, non-alert message
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul className="form">
        <li>
          <label htmlFor="email">Email</label>
        </li>

        <li>
          <input
            type="text"
            id="email"
            placeholder="Email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
        </li>

        {errors.email && <li>Please enter a valid email</li>}

        <li>
          <label htmlFor="password">Password</label>
        </li>
        <li>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </li>

        {errors.password && <li>This field is required</li>}

        <li>
          <input type="submit" />
        </li>
      </ul>
      <div>
        <p>Access Token: {tokens && tokens.accessToken}</p>
        <p>Refresh Token: {tokens && tokens.refreshToken}</p>
      </div>
    </form>
  );
}

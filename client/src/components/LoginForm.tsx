import './LoginForm.css';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearTokens, setTokens } from '../app/tokenSlice';
import LoginInput from '../types/LoginInput';
import { loginUser } from '../util/auth';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();

  const [errorMessage, setErrorMessage] = useState('');

  const tokens = useAppSelector((state) => state.tokens.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (tokens.accessToken) {
    return <Navigate to="/feed" replace />;
  }

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    setErrorMessage('');

    const res = await loginUser(data);
    if (res.tokens) {
      console.log(res.tokens);

      // store in redux
      dispatch(setTokens(res.tokens));

      // redirect to feed
    } else {
      // ensure no tokens in redux
      dispatch(clearTokens());

      setErrorMessage(res.errorMessage || 'An error occurred.');
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
          <input type="submit" value="Login" />
        </li>

        <li>
          <input
            type="button"
            onClick={() => {
              navigate('/');
            }}
            value="Register"
          />
        </li>
      </ul>
      <div>
        {/* TODO: DEV HELP, REMOVE LATER */}
        <p>Access Token: {tokens && tokens.accessToken}</p>
        <p>Refresh Token: {tokens && tokens.refreshToken}</p>
        <p>Error Message: {errorMessage || ''}</p>
      </div>
    </form>
  );
}

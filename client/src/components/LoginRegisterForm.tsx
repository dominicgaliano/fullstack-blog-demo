import './LoginForm.css';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearToken, setToken } from '../app/tokenSlice';
import LoginInput from '../types/LoginInput';
import { loginUser, registerUser } from '../util/auth';

export default function LoginRegisterForm({ login }: { login: boolean }) {
  // redux utilities
  const token = useAppSelector((state) => state.token.value);
  const dispatch = useAppDispatch();

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    setErrorMessage('');

    const submitHandler = login ? loginUser : registerUser;
    const res = await submitHandler(data);
    if (res.token) {
      console.log(res.token);

      // store in redux
      dispatch(setToken(res.token));
    } else {
      // ensure no tokens in redux
      dispatch(clearToken());

      setErrorMessage(res.errorMessage || 'An error occurred.');
    }
  };

  // local component state
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{login ? 'LOGIN' : 'REGISTER'}</h1>
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
          <input type="submit" value={login ? 'Login' : 'Register'} />
        </li>
      </ul>
      <div>
        {/* TODO: DEV HELP, REMOVE LATER */}
        <p>Access Token: {token || ''}</p>
        <p>Error Message: {errorMessage || ''}</p>
      </div>
    </form>
  );
}

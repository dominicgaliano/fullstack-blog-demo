import './LoginForm.css';

import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { loginUser, registerUser } from '../actions/authActions';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import LoginInput from '../types/LoginInput';

export default function LoginRegisterForm({ login }: { login: boolean }) {
  // redux utilities
  const {
    token,
    isAuthenticated,
    error: errorMessage,
  } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // react router utilities
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/feed');
    }
  }, [navigate, dispatch, isAuthenticated]);

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();

  const onSubmit: SubmitHandler<LoginInput> = async (loginInput) => {
    dispatch(login ? loginUser(loginInput) : registerUser(loginInput));
  };

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

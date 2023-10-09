import './LoginForm.css';

import { SubmitHandler, useForm } from 'react-hook-form';

import LoginInput from '../types/LoginInput';
import { loginUser } from '../util/auth';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    const res = await loginUser(data);
    if (res.tokens) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      console.log(res.tokens!);
      // TODO: do something with tokens
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      alert(res.errorMessage!);
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
    </form>
  );
}

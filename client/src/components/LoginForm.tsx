import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        placeholder="Email"
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <span>This field is required</span>}
      <label htmlFor="password">Email</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        {...register('password', { required: true })}
      />
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // not working
    setErrorMessage(JSON.stringify(data));
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        placeholder="Email"
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <label htmlFor="password">Email</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        {...register('Password', { required: true, minLength: 8, maxLength: 100 })}
      />

      <input type="submit" />
      <p>{errorMessage || ''}</p>
    </form>
  );
}

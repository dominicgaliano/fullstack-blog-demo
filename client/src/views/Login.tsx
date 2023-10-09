import { useState } from 'react';

import LoginForm from '../components/LoginForm';
import Nav from '../components/Nav';
import RegisterForm from '../components/RegisterForm';

function Login() {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <>
      <Nav />
      {isNewUser ? <RegisterForm /> : <LoginForm />}
      <button
        onClick={() => {
          setIsNewUser(!isNewUser);
        }}
      >
        {isNewUser ? 'Returning user? Sign in' : 'New user? Create account'}
      </button>
    </>
  );
}

export default Login;

import { useState } from 'react';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

function Login() {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <>
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

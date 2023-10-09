import { useState } from 'react';

import LoginRegisterForm from '../components/LoginForm';

function Login() {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <>
      <LoginRegisterForm login={!isNewUser} />
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

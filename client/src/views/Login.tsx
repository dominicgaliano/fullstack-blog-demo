import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';
import LoginRegisterForm from '../components/LoginRegisterForm';

function Login() {
  const [isNewUser, setIsNewUser] = useState(false);
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.token.value);

  useEffect(() => {
    if (token) {
      navigate('/feed');
    }
  }, [navigate, token]);

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

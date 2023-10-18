import { Link } from 'react-router-dom';

import LoginRegisterForm from '../components/LoginRegisterForm';

function Login() {
  return (
    <>
      <LoginRegisterForm login={true} />
      <Link to="/register">register</Link>
    </>
  );
}

export default Login;

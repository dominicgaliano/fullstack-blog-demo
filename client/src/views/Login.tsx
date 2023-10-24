import './Login.css';

import { Link } from 'react-router-dom';

import LoginRegisterForm from '../components/LoginRegisterForm';

function Login() {
  return (
    <div className="form-container">
      <div className="form-items">
        <LoginRegisterForm login={true} />
        <Link to="/register">register</Link>
      </div>
    </div>
  );
}

export default Login;

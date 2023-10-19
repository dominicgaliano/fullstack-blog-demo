import './Login.css';

import { Link } from 'react-router-dom';

import LoginRegisterForm from '../components/LoginRegisterForm';

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-child">
        <LoginRegisterForm login={false} />
        <Link to="/login">login</Link>
      </div>
    </div>
  );
};

export default Register;

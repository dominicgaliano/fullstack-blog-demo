import './LoginView.css';

import { Link } from 'react-router-dom';

import LoginRegisterForm from '../components/LoginRegisterForm';

const RegisterView = () => {
  return (
    <div className="form-container">
      <div className="form-items">
        <LoginRegisterForm login={false} />
        <Link to="/login">login</Link>
      </div>
    </div>
  );
};

export default RegisterView;

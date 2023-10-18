import { Link } from 'react-router-dom';

import LoginRegisterForm from '../components/LoginRegisterForm';

const Register = () => {
  return (
    <div>
      <LoginRegisterForm login={false} />
      <Link to="/login">login</Link>
    </div>
  );
};

export default Register;

// import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearToken } from '../app/tokenSlice';
import { logoutUser } from '../util/auth';

export default function LogoutButton() {
  const token = useAppSelector((state) => state.token.value);
  const dispatch = useAppDispatch();

  // const navigate = useNavigate();

  const handleLogout = async () => {
    // send logout request to server
    await logoutUser(token);

    // clear tokens
    dispatch(clearToken());

    // redirect to login screen
    // navigate('/');
  };

  return <button onClick={handleLogout}>Logout</button>;
}

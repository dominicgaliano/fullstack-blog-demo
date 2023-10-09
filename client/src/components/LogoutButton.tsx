import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearTokens } from '../app/tokenSlice';
import { logoutUser } from '../util/auth';

export default function LogoutButton() {
  const tokens = useAppSelector((state) => state.tokens.value);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogout = async () => {
    // send logout request to server
    await logoutUser(tokens.accessToken);

    // clear tokens
    dispatch(clearTokens());

    // redirect to login screen
    navigate('/');
  };

  return <button onClick={handleLogout}>Logout</button>;
}

import { logoutUser } from '../actions/authActions';
import { useAppDispatch } from '../app/hooks';

export default function LogoutButton() {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(logoutUser());
  };

  return <button onClick={handleLogout}>Logout</button>;
}

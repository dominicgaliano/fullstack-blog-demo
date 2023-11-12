import Button from '@mui/material/Button';

import { logoutUser } from '../actions/authActions';
import { useAppDispatch } from '../app/hooks';

export default function LogoutButton() {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(logoutUser());
  };

  return (
    <Button color="inherit" onClick={handleLogout}>
      Logout
    </Button>
  );
}

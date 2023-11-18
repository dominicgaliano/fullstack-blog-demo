import { AppBar, Box, Button, styled, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../actions/authActions';
import { useAppDispatch } from '../app/hooks';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            FULLSTACK BLOG
          </Typography>
          <CreatePostButton />
          <LogoutButton />
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}

function CreatePostButton() {
  const navigate = useNavigate();
  return (
    <Button color="inherit" onClick={() => navigate('/feed/new')}>
      New Post
    </Button>
  );
}

function LogoutButton() {
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

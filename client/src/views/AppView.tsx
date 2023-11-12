import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

import LogoutButton from '../components/LogoutButton';

function AppView() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              FULLSTACK BLOG
            </Typography>
            <LogoutButton />
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </>
  );
}

export default AppView;

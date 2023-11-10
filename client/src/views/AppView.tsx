import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

function AppView() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              NAME OF PAGE
            </Typography>
          </Toolbar>
          <Button color="inherit">Login</Button>
        </AppBar>
      </Box>
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </>
  );
}

export default AppView;

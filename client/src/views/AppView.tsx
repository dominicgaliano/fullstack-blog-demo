import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar';

function AppView() {
  return (
    <>
      <NavBar />
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </>
  );
}

export default AppView;

import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material';

import CreatePostButton from './CreatePostButton';
import LogoutButton from './LogoutButton';

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

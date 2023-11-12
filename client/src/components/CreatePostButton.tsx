import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CreatePostButton() {
  const navigate = useNavigate();
  return (
    <Button color="inherit" onClick={() => navigate('/feed/new')}>
      New Post
    </Button>
  );
}

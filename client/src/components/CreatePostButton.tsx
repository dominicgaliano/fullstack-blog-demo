import { useNavigate } from 'react-router-dom';

export default function CreatePostButton() {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/feed/new')}>New Post</button>;
}

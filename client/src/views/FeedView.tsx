import CreatePostButton from '../components/CreatePostButton';
import FeedBody from '../components/FeedBody';
import LogoutButton from '../components/LogoutButton';

function FeedView() {
  return (
    <>
      <FeedBody />
      <CreatePostButton />
      <LogoutButton />
    </>
  );
}

export default FeedView;

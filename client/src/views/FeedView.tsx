import CreatePostButton from '../components/CreatePostButton';
import FeedBody from '../components/FeedBody';
import LogoutButton from '../components/LogoutButton';

function FeedView() {
  return (
    <>
      Feed
      <FeedBody />
      <CreatePostButton />
      <LogoutButton />
    </>
  );
}

export default FeedView;

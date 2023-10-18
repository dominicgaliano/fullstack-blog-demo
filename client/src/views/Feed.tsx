import { axiosPrivate } from '../api/axios';
import LogoutButton from '../components/LogoutButton';

function Feed() {
  return (
    <>
      Feed
      <button onClick={fetchPosts}>fetch posts (dev button)</button>
      <LogoutButton />
    </>
  );
}

export default Feed;

const fetchPosts = () => {
  axiosPrivate
    .get('/posts')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

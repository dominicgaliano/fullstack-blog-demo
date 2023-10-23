import axios from 'axios';

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

const fetchPosts = async () => {
  await axios.get('http://localhost:4001/api/token', { withCredentials: true });
  // axiosPrivate
  //   .get('/posts')
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));
};

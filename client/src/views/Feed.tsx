import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';
import FeedBody from '../components/FeedBody';
import LogoutButton from '../components/LogoutButton';

function Feed() {
  // const navigate = useNavigate();
  // const token = useAppSelector((state) => state.token.value);

  // useEffect(() => {
  //   if (!token) {
  //     navigate('/');
  //   }
  // }, [navigate, token]);

  // return (
  //   <>
  //     <FeedBody />
  //     <LogoutButton />
  //   </>
  // );

  return (
    <>
      Feed
      <LogoutButton />
    </>
  );
}

export default Feed;

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';
import Post from '../types/Post';
import { getPosts } from '../util/posts';

export default function FeedBody() {
  const tokens = useAppSelector((state) => state.tokens.value);
  const dispatch = useDispatch();

  const [posts, setPosts] = useState<[Post]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // get the data from the api
        const data = await getPosts(tokens.accessToken);

        // set state with the result
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    // call the function
    fetchData();
  }, []);

  if (!tokens.accessToken) {
    return <Navigate to="/" replace />;
  }

  return (
    <ul>
      {posts && posts.map((post) => <li key={post._id}>{JSON.stringify(post)}</li>)}
    </ul>
  );
}

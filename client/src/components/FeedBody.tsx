import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';
import Post from '../types/Post';
import { getPosts } from '../util/posts';

export default function FeedBody() {
  const tokens = useAppSelector((state) => state.tokens.value);

  const [posts, setPosts] = useState<[Post]>();
  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const data = await getPosts(tokens.accessToken);
      console.log(data);

      // set state with the result
      setPosts(data);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
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

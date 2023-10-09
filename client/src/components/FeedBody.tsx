import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';
import Post from '../types/Post';
import { getPosts } from '../util/posts';

export default function FeedBody() {
  const token = useAppSelector((state) => state.token.value);
  const dispatch = useDispatch();

  const [posts, setPosts] = useState<[Post]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // get the data from the api
        const data = await getPosts(token);

        // set state with the result
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    // call the function
    fetchData();
  }, []);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <ul>
      {posts && posts.map((post) => <li key={post._id}>{JSON.stringify(post)}</li>)}
    </ul>
  );
}

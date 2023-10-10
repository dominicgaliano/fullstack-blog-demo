import { useEffect, useState } from 'react';

import { useAppSelector } from '../app/hooks';
import Post from '../types/Post';
import { getPosts } from '../util/posts';

export default function FeedBody() {
  const token = useAppSelector((state) => state.token.value);

  const [posts, setPosts] = useState<[Post]>();

  const fetchData = async () => {
    try {
      // get the data from the api
      const data = await getPosts(token);

      // set state with the result
      setPosts(data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData().catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ul>
        {posts && posts.map((post) => <li key={post._id}>{JSON.stringify(post)}</li>)}
      </ul>
      <button onClick={fetchData}>manual refresh</button>
    </>
  );
}

import { useEffect, useState } from 'react';

import { useAppSelector } from '../app/hooks';
import Post from '../types/Post';
import { getPosts } from '../util/posts';

export default function FeedBody() {
  const token = useAppSelector((state) => state.token.value);

  const [posts, setPosts] = useState<[Post]>();
  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const data = await getPosts(token);

      // set state with the result
      setPosts(data);
    };

    // call the function
    fetchData().catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {posts && posts.map((post) => <li key={post._id}>{JSON.stringify(post)}</li>)}
    </ul>
  );
}

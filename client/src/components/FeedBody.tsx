import { useEffect } from 'react';

import { getPosts } from '../actions/postActions';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Post from '../types/Post';

export default function FeedBody() {
  // redux utilities
  const { posts, loading, error } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      {loading ? (
        <span>LOADING...</span>
      ) : (
        <div>
          <ul>
            {posts &&
              posts.map((post: Post) => <li key={post._id}>{JSON.stringify(post)}</li>)}
          </ul>
          {/* TODO: DEV HELP, REMOVE LATER */}
          <p>Error Message: {error || ''}</p>
        </div>
      )}
    </>
  );
}

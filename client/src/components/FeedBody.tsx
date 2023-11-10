import { useEffect } from 'react';

import { getPosts } from '../actions/postActions';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import loadingGif from '../assets/loadingGif.gif';
import Post from '../types/Post';
import PostCard from './PostCard';

export default function FeedBody() {
  // redux utilities
  const { posts, loading, error } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <img src={loadingGif} alt="loading gif"></img>
      ) : (
        <div>
          {posts && posts.map((post: Post) => <PostCard post={post} key={post._id} />)}
          <p>Error Message: {error || ''}</p>
        </div>
      )}
    </>
  );
}

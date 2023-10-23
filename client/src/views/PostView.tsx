import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getPost } from '../actions/postActions';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import PostCard from '../components/PostCard';

export default function PostView() {
  // extract post id from route
  const { id } = useParams();
  console.log(id);

  // redux utilities
  const { post, loading, error } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('run with', id);
    dispatch(getPost(id || ''));
  }, []);

  return (
    <>
      {loading ? (
        <span>LOADING...</span>
      ) : error ? (
        <p>error</p>
      ) : (
        post && <PostCard post={post} />
      )}
    </>
  );
}

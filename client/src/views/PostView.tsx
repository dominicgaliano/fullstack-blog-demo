import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getPost } from '../actions/postActions';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import PostCard from '../components/PostCard.1';

export default function PostView() {
  // extract post id from route
  const { id } = useParams();

  // redux utilities
  const { post, loading, error } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPost(id || ''));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <span>LOADING...</span>
      ) : (
        <div>
          <ul>{post && <PostCard post={post} />}</ul>
          {/* TODO: DEV HELP, REMOVE LATER */}
          <p>Error Message: {error || ''}</p>
        </div>
      )}
    </>
  );
}

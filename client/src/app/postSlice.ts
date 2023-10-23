import { createSlice } from '@reduxjs/toolkit';

import { createPost, getPost, getPosts } from '../actions/postActions';
import PostState from '../types/PostState';

const initialState: PostState = {
  loading: false,
  posts: [],
  error: null,
  post: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //TODO: simplify with matching utility
    // https://redux-toolkit.js.org/api/matching-utilities
    builder
      // get posts
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // get post
      .addCase(getPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(getPost.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload as string;
      })
      // create post
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default postSlice.reducer;

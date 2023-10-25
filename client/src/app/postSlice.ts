import { createSlice } from '@reduxjs/toolkit';

import {
  createComment,
  createPost,
  deleteComment,
  deletePost,
  getPost,
  getPosts,
  updateComment,
  updatePost,
} from '../actions/postActions';
import CommentType from '../types/CommentType';
import Post from '../types/Post';
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
        // state.post = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // delete post
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = null;
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // update post
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        const newPost = action.payload as Post;
        const index = state.posts.findIndex((post) => post._id === newPost._id);
        state.posts[index] = newPost;
        // this might be a bad practice
        if (state.post && state.post?._id === newPost._id) {
          state.post = newPost;
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // create comment
      .addCase(createComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = false;
        const { newComment, postId } = action.payload as {
          newComment: CommentType;
          postId: string;
        };
        const postIndex = state.posts.findIndex((post) => post._id === postId);
        state.posts[postIndex].comments = [
          ...state.posts[postIndex].comments,
          newComment,
        ];
      })
      .addCase(createComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // update comment
      .addCase(updateComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.loading = false;
        const { newComment, postId } = action.payload as {
          newComment: CommentType;
          postId: string;
        };
        const postIndex = state.posts.findIndex((post) => post._id === postId);
        const postToEdit = state.posts[postIndex] as Post;
        const commentIndex = postToEdit.comments.findIndex(
          (comment) => comment._id === newComment._id,
        );
        state.posts[postIndex].comments[commentIndex] = newComment;
      })
      .addCase(updateComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // delete comment
      .addCase(deleteComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        const { postId, commentId } = action.payload;
        const postIndex = state.posts.findIndex((post) => post._id === postId);
        state.posts[postIndex].comments = state.posts[postIndex].comments.filter(
          (comment: CommentType) => comment._id !== commentId,
        );
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default postSlice.reducer;

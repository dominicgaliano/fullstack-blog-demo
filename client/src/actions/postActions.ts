import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosPrivate } from '../api/axios';

export const getPosts = createAsyncThunk(
  'post/getPosts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate('/posts');
      return data;
    } catch (error: Error | any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.error.message) {
        // wow, this is a handful of a variable name
        return rejectWithValue(error.response.data.error.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const getPost = createAsyncThunk(
  'post/getPost',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate(`/posts/${id}`);
      return data;
    } catch (error: Error | any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.error.message) {
        // wow, this is a handful of a variable name
        return rejectWithValue(error.response.data.error.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const createPost = createAsyncThunk(
  'post/createPost',
  async (content: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.post(`/posts`, { content: content });
      return data;
    } catch (error: Error | any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.error.message) {
        // wow, this is a handful of a variable name
        return rejectWithValue(error.response.data.error.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const deletePost = createAsyncThunk(
  'post/deletePost',
  async (id: string, { rejectWithValue }) => {
    try {
      await axiosPrivate.delete(`/posts/${id}`);
      return id;
    } catch (error: Error | any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.error.message) {
        // wow, this is a handful of a variable name
        return rejectWithValue(error.response.data.error.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const updatePost = createAsyncThunk(
  'post/updatePost',
  async (
    { id, newContent }: { id: string; newContent: string },
    { fulfillWithValue, rejectWithValue },
  ) => {
    try {
      const { data } = await axiosPrivate.put(`/posts/${id}`, { content: newContent });
      return fulfillWithValue(data);
    } catch (error: Error | any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.error.message) {
        // wow, this is a handful of a variable name
        return rejectWithValue(error.response.data.error.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const createComment = createAsyncThunk(
  'post/createComment',
  async (
    { postId, newContent }: { postId: string; newContent: string },
    { fulfillWithValue, rejectWithValue },
  ) => {
    try {
      const { data } = await axiosPrivate.post(`/posts/${postId}/comments`, {
        commentBody: newContent,
      });
      const res = { postId: postId, newComment: data };
      return fulfillWithValue(res);
    } catch (error: Error | any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.error.message) {
        // wow, this is a handful of a variable name
        return rejectWithValue(error.response.data.error.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const updateComment = createAsyncThunk(
  'post/updateComment',
  async (
    {
      postId,
      commentId,
      newContent,
    }: { postId: string; commentId: string; newContent: string },
    { fulfillWithValue, rejectWithValue },
  ) => {
    try {
      const { data } = await axiosPrivate.put(`/posts/${postId}/comments/${commentId}`, {
        commentBody: newContent,
      });
      const res = { postId: postId, newComment: data };
      return fulfillWithValue(res);
    } catch (error: Error | any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.error.message) {
        // wow, this is a handful of a variable name
        return rejectWithValue(error.response.data.error.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const deleteComment = createAsyncThunk(
  'post/deleteComment',
  async (
    { postId, commentId }: { postId: string; commentId: string },
    { fulfillWithValue, rejectWithValue },
  ) => {
    try {
      await axiosPrivate.delete(`posts/${postId}/comments/${commentId}`);
      return fulfillWithValue({ postId: postId, commentId: commentId });
    } catch (error: Error | any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.error.message) {
        // wow, this is a handful of a variable name
        return rejectWithValue(error.response.data.error.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

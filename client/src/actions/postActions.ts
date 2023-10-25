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

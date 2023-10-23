import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosPrivate, axiosPublic } from '../api/axios';

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

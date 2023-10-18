import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosPublicAuth, axiosRefreshToken } from '../api/axios';
import LoginInput from '../types/LoginInput';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (loginInput: LoginInput, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublicAuth.post('login', loginInput);
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

export const registerUser = createAsyncThunk(
  'auth/register',
  async (loginInput: LoginInput, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublicAuth.post('users', loginInput);
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

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      console.log('logout, to be implemented');
      // server side logout here
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

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosRefreshToken.post('/token');
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

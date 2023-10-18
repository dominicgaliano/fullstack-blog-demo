import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AUTH_URL } from '../config';
import LoginInput from '../types/LoginInput';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (loginInput: LoginInput, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(`${AUTH_URL}/login`, loginInput, config);
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
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(`${AUTH_URL}/users`, loginInput, config);
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

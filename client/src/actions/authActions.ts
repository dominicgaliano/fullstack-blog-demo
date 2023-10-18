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
      return rejectWithValue(error.message || null);
    }
  },
);

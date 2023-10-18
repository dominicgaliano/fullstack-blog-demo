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

      await axios.post(`${AUTH_URL}/login`, loginInput, config);
    } catch (error: Error | any) {
      return rejectWithValue(error.message || null);
    }
  },
);

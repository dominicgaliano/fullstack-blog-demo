import { createSlice } from '@reduxjs/toolkit';

import { loginUser } from '../actions/authActions';
import AuthState from '../types/AuthState';

const initialState: AuthState = {
  loading: false,
  token: null,
  success: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login user
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true; // registration successful
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;

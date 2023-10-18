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
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.token = action.payload.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;

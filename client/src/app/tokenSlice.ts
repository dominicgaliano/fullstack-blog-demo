import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: '',
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
    clearToken: (state) => {
      state.value = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;

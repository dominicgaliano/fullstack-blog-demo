import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'tokens',
  initialState: {
    value: {
      accessToken: '',
      refreshToken: '',
    },
  },
  reducers: {
    setTokens: (state, action) => {
      state.value = action.payload;
    },
    clearTokens: (state) => {
      state.value = {
        accessToken: '',
        refreshToken: '',
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTokens, clearTokens } = tokenSlice.actions;

export default tokenSlice.reducer;

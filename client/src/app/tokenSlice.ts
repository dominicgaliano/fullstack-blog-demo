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
    set: (state, action) => {
      state.value = action.payload;
    },
    clear: (state) => {
      state.value = {
        accessToken: '',
        refreshToken: '',
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { set, clear } = tokenSlice.actions;

export default tokenSlice.reducer;

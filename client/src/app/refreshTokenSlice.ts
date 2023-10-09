import { createSlice } from '@reduxjs/toolkit';

export const refreshTokenSlice = createSlice({
  name: 'refreshToken',
  initialState: {
    value: '',
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set } = refreshTokenSlice.actions;

export default refreshTokenSlice.reducer;

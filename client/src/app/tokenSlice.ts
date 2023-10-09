import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: {
      authToken: '',
      refreshToken: '',
    },
  },
  reducers: {
    set: (state, action) => {
      console.log(state, action);
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set } = tokenSlice.actions;

export default tokenSlice.reducer;

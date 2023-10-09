import { createSlice } from '@reduxjs/toolkit';

export const authTokenSlice = createSlice({
  name: 'authToken',
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
export const { set } = authTokenSlice.actions;

export default authTokenSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// import { getPosts } from '../actions/postActions';
// import PostState from '../types/PostState';

// const initialState: PostState = {
//   posts: [],
// };

// export const postSlice = createSlice({
//   name: 'post',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     //TODO: simplify with matching utility
//     // https://redux-toolkit.js.org/api/matching-utilities
//     builder
//       // get posts
//       .addCase(getPosts.pending, (state) => {
//         state.loading = true;
//       })
//       // login user
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = true;
//         state.token = action.payload.accessToken;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export default postSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';

import authTokenReducer from './authTokenSlice';
import refreshTokenReducer from './refreshTokenSlice';

export default configureStore({
  reducer: {
    authToken: authTokenReducer,
    refreshToken: refreshTokenReducer,
  },
});

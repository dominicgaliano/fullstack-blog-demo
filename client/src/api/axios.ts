import axios from 'axios';

import { store } from '../app/store';
import { API_URL, AUTH_URL } from '../config';

const authConfig = {
  baseURL: AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};
const config = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const axiosPublicAuth = axios.create(authConfig);
export const axiosPrivateAuth = axios.create(authConfig);
export const axiosPublic = axios.create(config);
export const axiosPrivate = axios.create(config);

// axiosPrivate.interceptors.request.use(
//   async (config) => {
//     const user = store?.getState()?.userData?.user;

//     let currentDate = new Date();
//     if (user?.accessToken) {
//       const decodedToken: { exp: number } = jwt_decode(user?.accessToken);
//       if (decodedToken.exp * 1000 < currentDate.getTime()) {
//         await store.dispatch(refreshToken());
//         if (config?.headers) {
//           config.headers['authorization'] = `Bearer ${
//             store?.getState()?.userData?.user?.accessToken
//           }`;
//         }
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

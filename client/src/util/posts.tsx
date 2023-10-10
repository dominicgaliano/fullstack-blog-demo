import axios from 'axios';

import { API_URL } from '../config';
import Token from '../types/Token';
import { refreshToken } from './auth';

export const getPosts = async (accessToken: Token) => {
  const headers = { Authorization: `Bearer ${accessToken}` };

  try {
    // TODO: error handling
    const res = await axios.get(`${API_URL}/posts`, { headers });
    return res.data;
  } catch (error) {
    const isAxiosError = axios.isAxiosError(error);

    if (isAxiosError && error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      // need to refresh token and try call again
      if (error.response.status === 403) {
        // refresh token
        console.log('token stale');
      } else {
        console.log(error);
      }
      return [];
    } else if (isAxiosError && error.request) {
      // The request was made but no response was received
      return [];
    } else {
      // Something happened in setting up the request that triggered an Error
      return [];
    }
  }
};

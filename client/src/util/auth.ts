import axios from 'axios';

import { AUTH_URL } from '../config';
import LoginInput from '../types/LoginInput';
import Token from '../types/Token';

export const loginUser = async (loginInput: LoginInput) => {
  let accessToken: Token = '';
  let refreshToken: Token = '';

  try {
    const res = await axios.post(`${AUTH_URL}/login`, loginInput);

    accessToken = res.data.accessToken;
    refreshToken = res.data.refreshToken;

    return {
      tokens: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    };
  } catch (error) {
    let errorMessage = '';
    const isAxiosError = axios.isAxiosError(error);

    if (isAxiosError && error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      errorMessage = error.response.data.error.message;
    } else if (isAxiosError && error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      errorMessage =
        'Authorization server could not be reached at this time, please try again later.';
    } else {
      // Something happened in setting up the request that triggered an Error
      errorMessage = 'An unexpected error occurred, please try again later.';
    }

    return {
      errorMessage: errorMessage,
    };
  }
};

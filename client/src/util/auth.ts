import axios from 'axios';

import { AUTH_URL } from '../config';
import LoginInput from '../types/LoginInput';
import Token from '../types/Token';

export const loginUser = async (loginInput: LoginInput) => {
  return await loginOrRegisterUser(loginInput, true);
};

export const registerUser = async (loginInput: LoginInput) => {
  return await loginOrRegisterUser(loginInput, false);
};

const loginOrRegisterUser = async (loginInput: LoginInput, login: boolean) => {
  let accessToken: Token = '';

  try {
    const res = await axios.post(`${AUTH_URL}/${login ? 'login' : 'users'}`, loginInput);

    accessToken = res.data.accessToken;

    return {
      token: accessToken,
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

export const refreshToken = async () => {
  try {
    const res = await axios.post(`${AUTH_URL}/token`, { withCredentials: true });

    const newToken: Token = res.data.accessToken;

    return {
      token: newToken,
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

export const logoutUser = async (accessToken: Token) => {
  const headers = { Authorization: `Bearer ${accessToken}` };

  try {
    await axios.post(`${AUTH_URL}/logout`, { headers });
  } catch (error) {
    console.log(error);
  }
};

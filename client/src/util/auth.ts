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
      success: true,
      tokens: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: {
        error,
      },
    };
  }
};

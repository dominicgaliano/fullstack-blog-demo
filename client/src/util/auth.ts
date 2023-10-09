import axios from 'axios';

import { AUTH_URL } from '../config';
import LoginInput from '../types/LoginInput';
import Token from '../types/Token';

export const loginUser = async (loginInput: LoginInput) => {
  const res = await axios.post(`${AUTH_URL}/login`, loginInput);
  console.log(res);

  // TODO: implement error handling and actual logic

  const accessToken: Token = '';
  const refreshToken: Token = '';

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

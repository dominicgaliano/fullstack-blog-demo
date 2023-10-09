import axios from 'axios';

import { API_URL } from '../config';
import Token from '../types/Token';

export const getPosts = async (accessToken: Token) => {
  const headers = { Authorization: `Bearer ${accessToken}` };

  try {
    // TODO: error handling
    const res = await axios.get(`${API_URL}/posts`, { headers });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

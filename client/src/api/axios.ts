import axios from 'axios';

import { API_URL, AUTH_URL } from '../config';

export const axiosPublicAuth = axios.create({ baseURL: AUTH_URL });
export const axiosPrivateAuth = axios.create({ baseURL: AUTH_URL });
export const axiosPublic = axios.create({ baseURL: API_URL });
export const axiosPrivate = axios.create({ baseURL: API_URL });

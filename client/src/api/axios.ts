import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { refreshToken } from '../actions/authActions';
import { API_URL, AUTH_URL } from '../config';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  sent?: boolean;
  // Add other custom properties or methods as needed
}

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
export const axiosRefreshToken = axios.create({ ...authConfig, withCredentials: true });
export const axiosPublic = axios.create(config);
export const axiosPrivate = axios.create(config);

export function setupInterceptors(store) {
  const privateRequestInterceptor = async (config: InternalAxiosRequestConfig) => {
    // attaches token as bearer header
    if (!config.headers['Authorization']) {
      const token = store?.getState()?.auth.token;
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  };

  const privateResponseInterceptor = async (error: AxiosError) => {
    // performs one retry if 403 returned
    const prevRequest: CustomAxiosRequestConfig | undefined = error?.config;
    // only try again in first retry (ie, prevRequest.sent does not exist)
    if (prevRequest && error?.response?.status === 403 && !prevRequest?.sent) {
      prevRequest.sent = true;
      await store.dispatch(refreshToken());
      return axiosPrivate(prevRequest);
    }
    return Promise.reject(error);
  };

  axiosPrivate.interceptors.request.use(privateRequestInterceptor, (error) => {
    return Promise.reject(error);
  });
  axiosPrivateAuth.interceptors.request.use(privateRequestInterceptor, (error) => {
    return Promise.reject(error);
  });

  axiosPrivate.interceptors.response.use(
    (response) => response,
    privateResponseInterceptor,
  );
  axiosPrivateAuth.interceptors.response.use(
    (response) => response,
    privateResponseInterceptor,
  );
}

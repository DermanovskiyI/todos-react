import axios from 'axios';

const baseURL = '/api';

const defaultAxiosConfig = {
  headers: {
    Accept: 'application/json',
  },
  baseURL,
};

const axiosInstance = axios.create(defaultAxiosConfig);

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

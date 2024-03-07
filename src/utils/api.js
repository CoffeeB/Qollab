//utils/api.js
import axios from 'axios';
import Cookies from 'js-cookie';
import apiConfig from './apiConfig';

const api = axios.create({
  baseURL: apiConfig.baseURL,
});

api.interceptors.request.use((config) => {
  const authToken = Cookies.get('authToken');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

export default api;

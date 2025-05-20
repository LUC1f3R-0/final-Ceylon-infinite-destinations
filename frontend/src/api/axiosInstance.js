// src/api/axiosInstance.js
import axios from 'axios';
import attachApiKeyHeaders from './attachApiKeyHeaders';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKED_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

axiosInstance.interceptors.request.use(attachApiKeyHeaders, error => {
  return Promise.reject(error);
});

export default axiosInstance;

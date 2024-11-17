import axios from 'axios';

export const taskProApi = axios.create({
  baseURL: 'https://back-end-4-dfu1.onrender.com',
});

export const setAuthHeader = (token) => {
  taskProApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  taskProApi.defaults.headers.common.Authorization = '';
};
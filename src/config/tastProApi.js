import axios from 'axios';

export const taskProApi = axios.create({
  baseURL: 'https://task-pro-covc.onrender.com/',
});

export const setAuthHeader = (token) => {
  taskProApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  taskProApi.defaults.headers.common.Authorization = '';
};
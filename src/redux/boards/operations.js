import { createAsyncThunk } from '@reduxjs/toolkit';
import { taskProApi, setAuthHeader } from '../../config/taskProApi';

// Отримати всі борди
export const getBoards = createAsyncThunk(
  'boards/getBoards',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('Token not found');
    }

    try {
      setAuthHeader(token);
      const response = await taskProApi.get('/board');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримати борд за ID
export const getBoardById = createAsyncThunk(
  'boards/getBoardById',
  async (boardId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('Token not found');
    }

    try {
      setAuthHeader(token);
      const response = await taskProApi.get(`/board/${boardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Додати борд
export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('Token not found');
    }

    try {
      setAuthHeader(token);
      const response = await taskProApi.post('/board', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Оновити борд
export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({ boardId, data }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('Token not found');
    }

    try {
      setAuthHeader(token);
      const response = await taskProApi.put(`/board/${boardId}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Видалити борд
export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (boardId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('Token not found');
    }

    try {
      setAuthHeader(token);
      await taskProApi.delete(`/board/${boardId}`);
      return boardId; // повертаємо ID для видалення
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

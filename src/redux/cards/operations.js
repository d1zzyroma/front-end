import { createAsyncThunk } from '@reduxjs/toolkit';
import { taskProApi } from '../../config/tastProApi';

// GET cards
export const getCards = createAsyncThunk(
  'cards/getCards',
  async (boardId, thunkAPI) => {
    try {
      const response = await taskProApi.get(`/cards/${boardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST cards
export const addCard = createAsyncThunk(
  'cards/addCard',
  async ({ boardId, data }, thunkAPI) => {
    try {
      const response = await taskProApi.post(`/cards/${boardId}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// PUT cards/:id
export const updateCard = createAsyncThunk(
  'cards/updateCard',
  async ({ cardId, data }, thunkAPI) => {
    try {
      const response = await taskProApi.put(`/cards/${cardId}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// DELETE cards/:id
export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async (cardId, thunkAPI) => {
    try {
      await taskProApi.delete(`/cards/${cardId}`);
      return cardId; // Повертаємо ID для видалення з локального стану
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// PATCH cards/:id
export const replaceCard = createAsyncThunk(
  'cards/replaceCard',
  async ({ cardId, data }, thunkAPI) => {
    try {
      const response = await taskProApi.patch(`/cards/${cardId}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

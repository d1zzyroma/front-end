import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthHeader, taskProApi } from "../../config/taskProApi";

// GET Отримати колонки борда за ID
export const getBoardById = createAsyncThunk(
  "boards/getBoardById",
  async (boardId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Token not found");
    }

    try {
      setAuthHeader(token);
      const response = await taskProApi.get(`/boards/${boardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST columns - Відправляє запит для створення нової колонки з даними, що передаються в параметрах.
export const addColumn = createAsyncThunk(
  "columns/addColumn",
  async ({ id, title }, thunkAPI) => {
    try {
      const response = await taskProApi.post(`/columns/${id}`, {
        title,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// PUT columns/:id - Відправляє запит для оновлення колонки за її ID, передаючи нові дані.
export const updateColumn = createAsyncThunk(
  "columns/updateColumn",
  async ({ columnId, title }, thunkAPI) => {
    const dataSend = { title: title };

    try {
      const response = await taskProApi.patch(`/columns/${columnId}`, dataSend);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// DELETE columns/:id - Відправляє запит для видалення колонки за її ID.
export const deleteColumn = createAsyncThunk(
  "columns/deleteColumn",
  async (id, thunkAPI) => {
    try {
      await taskProApi.delete(`/columns/${id}`);
      return id; // Повертаємо ID для видалення з локального стану
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const filterCardsByPriority = createAsyncThunk(
  "columns/filterCardsByPriority",
  async ({ priority }, { getState }) => {
    const state = getState();
    const { allColumns } = state.columns;
    console.log(priority);

    // Фільтруємо картки в колонках на основі пріоритету
    if (priority === "all") {
      return allColumns;
    } else {
      const filteredColumns = allColumns.map((column) => ({
        ...column,
        cards: column.cards.filter((card) => card.priority === priority),
      }));
      console.log(filteredColumns);

      return filteredColumns;
    }
  }
);

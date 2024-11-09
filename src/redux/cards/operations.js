import { createAsyncThunk } from "@reduxjs/toolkit";
import { taskProApi } from "../../config/taskProApi";

// POST cards - Додає нову картку до дошки з ідентифікатором boardId. Дані картки передаються в data.
export const addCard = createAsyncThunk(
  "cards/addCard",
  async ({ columnId, data }, thunkAPI) => {
    console.log(columnId + "test logs");

    console.log(data);
    try {
      const response = await taskProApi.post(`/cards/${columnId}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// PUT cards/:id - Оновлює існуючу картку за її ID (cardId) з новими даними (data).
export const updateCard = createAsyncThunk(
  "cards/updateCard",
  async ({ cardId, data }, thunkAPI) => {
    console.log(cardId + "card id for update");
    console.log(data + "data for update");

    try {
      const response = await taskProApi.patch(`/cards/${cardId}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// DELETE cards/:id - Видаляє картку за її ID (cardId).
export const deleteCard = createAsyncThunk(
  "cards/deleteCard",
  async (cardId, thunkAPI) => {
    try {
      await taskProApi.delete(`/cards/${cardId}`);
      return cardId; // Повертаємо ID для видалення з локального стану
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// PATCH cards/:id - Застосовує часткові зміни до картки за її ID (cardId) з новими даними (data).
// export const replaceCard = createAsyncThunk(
//   "cards/replaceCard",
//   async ({ cardId, newColumnId, columnId }, thunkAPI) => {
//     try {
//       const data = { columnId: newColumnId };
//       console.log(data);

//       const response = await taskProApi.patch(`/cards/replace/${cardId}`, data);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const replaceCard = createAsyncThunk(
  "cards/replaceCard",
  async ({ cardId, newColumnId, columnId }, thunkAPI) => {
    try {
      const data = { columnId: newColumnId };
      console.log(data);

      const response = await taskProApi.patch(`/cards/replace/${cardId}`, data);

      // Додаємо старий columnId до об'єкта, щоб передати його в slice
      return { ...response.data, oldColumnId: columnId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

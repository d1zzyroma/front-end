import { createAsyncThunk } from "@reduxjs/toolkit";
import { taskProApi, setAuthHeader } from "../../config/taskProApi";
import { toast } from "react-toastify";

// Додати борд
export const addBoard = createAsyncThunk(
  "boards/addBoard",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Token not found");
    }

    try {
      setAuthHeader(token);

      const response = await taskProApi.post("/boards", data);

      toast.success("The board is created!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });

      return response.data;
    } catch (error) {
      toast.error("Error, please try again later!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Оновити борд
export const updateBoard = createAsyncThunk(
  "boards/updateBoard",
  async ({ boardId, editedBoardObject }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Token not found");
    }

    try {
      setAuthHeader(token);

      const response = await taskProApi.patch(
        `/boards/${boardId}`,
        editedBoardObject
      );

      toast.success("Board updated!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });

      return response.data;
    } catch (error) {
      toast.error("Error, please try again later!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Видалити борд
export const deleteBoard = createAsyncThunk(
  "boards/deleteBoard",
  async (boardId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Token not found");
    }

    try {
      setAuthHeader(token);

      await taskProApi.delete(`/boards/${boardId}`);

      toast.success("The board is removed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });

      return boardId; // повертаємо ID для видалення
    } catch (error) {
      toast.error("Error, please try again later!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

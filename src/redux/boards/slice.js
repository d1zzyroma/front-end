import { createSlice } from "@reduxjs/toolkit";
import { addBoard, updateBoard, deleteBoard } from "./operations";
import { userCurrent } from "../auth/operations.js";

const boardsSlice = createSlice({
  name: "boards",
  initialState: {
    boards: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userCurrent.pending, (state) => {
        state.loading = true;
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.boards = action.payload.boards;
        state.loading = false;
      })
      .addCase(userCurrent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.boards;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.boards.push(action.payload.data);
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        const updatedBoardData = action.payload.data; // Данні оновленої дошки з сервера

        // Перебираємо масив boards і замінюємо тільки ту дошку, у якої співпадає id
        state.boards = state.boards.map(
          (board) =>
            board._id === updatedBoardData._id
              ? updatedBoardData // Замінюємо об'єкт повністю на той, що прийшов з сервера
              : board // Інші дошки залишаються без змін
        );
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        const updatedBoards = state.boards.filter(
          (board) => board._id !== action.meta.arg
        );

        state.boards = [...updatedBoards];
      });
  },
});

export const boardsReducer = boardsSlice.reducer;

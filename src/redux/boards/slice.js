import { createSlice } from "@reduxjs/toolkit";
import {
  getBoards,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
} from "./operations";
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
      .addCase(getBoards.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.boards = action.payload;
      })
      .addCase(getBoards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.boards = action.payload.boards;
      })
      .addCase(getBoardById.fulfilled, (state, action) => {
        state.boards = state.boards.map((board) =>
          board.id === action.payload.data.board._id ? action.payload : board
        );
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.boards.push(action.payload.data);
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.boards = state.boards.map((board) =>
          board.id === action.payload.id ? action.payload : board
        );
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.boards = state.boards.filter(
          (board) => board.id !== action.meta.arg
        );
      });
  },
});

export const boardsReducer = boardsSlice.reducer;

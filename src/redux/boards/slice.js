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
        state.boards = state.boards.map((board) =>
          board.id === action.payload.id ? action.payload : board
        );
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        // console.log(
        //   "Список досок до удаления:",
        //   JSON.stringify(state.boards, null, 2)
        // );
        // console.log("ID для удаления:", action.meta.arg);

        // state.boards = state.boards.filter((board) => {
        //   console.log(`Проверка: ${board._id} !== ${action.meta.arg}`);
        //   return board._id !== action.meta.arg;
        // });

        // console.log(
        //   "Список досок после удаления:",
        //   JSON.stringify(state.boards, null, 2)
        // );
        const updatedBoards = state.boards.filter(
          (board) => board._id !== action.meta.arg
        );

        // Перезаписываем массив, чтобы Redux зафиксировал изменения
        state.boards = [...updatedBoards];
      });
  },
});

export const boardsReducer = boardsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  getColumns,
  addColumn,
  updateColumn,
  deleteColumn,
} from "./operations.js";
import { getBoardById } from "../boards/operations.js";

const initialState = {
  columns: [],
  status: "idle",
  loadColumns: false,
  error: null,
};

const columnsSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET all columns
      .addCase(getBoardById.fulfilled, (state, action) => {
        state.columns = action.payload.data;
        state.loadColumns = true;
      })
      .addCase(getColumns.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getColumns.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.columns = action.payload;
      })
      .addCase(getColumns.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // POST column
      .addCase(addColumn.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.loadColumns = true;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.status = "succeeded";

        // console.log(JSON.stringify(state.columns, null, 2));
        // state.columns.columnsAll = [
        //   ...state.columns.columnsAll,
        //   action.payload.data,
        // ];
        state.columns.columnsAll.push(action.payload.data);
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // PUT column
      .addCase(updateColumn.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.columns.findIndex(
          (column) => column.id === action.payload.id
        );
        if (index !== -1) {
          state.columns[index] = action.payload;
        }
      })
      .addCase(updateColumn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // DELETE column
      .addCase(deleteColumn.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.columns = state.columns.filter(
          (column) => column.id !== action.payload
        );
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const columnsReducer = columnsSlice.reducer;

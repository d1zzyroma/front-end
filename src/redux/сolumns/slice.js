import { createSlice } from '@reduxjs/toolkit';
import {
  getColumns,
  addColumn,
  updateColumn,
  deleteColumn,
} from './operations';

const columnsSlice = createSlice({
  name: 'columns',
  initialState: {
    columns: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getColumns.pending, (state) => {
        state.loading = true;
      })
      .addCase(getColumns.fulfilled, (state, action) => {
        state.loading = false;
        state.columns = action.payload;
      })
      .addCase(getColumns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.columns.push(action.payload);
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.columns = state.columns.map((column) =>
          column.id === action.payload.id ? action.payload : column
        );
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.columns = state.columns.filter(
          (column) => column.id !== action.payload
        );
      });
  },
});

export const columnsReducer = columnsSlice.reducer;

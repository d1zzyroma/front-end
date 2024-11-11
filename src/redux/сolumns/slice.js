import { createSlice } from "@reduxjs/toolkit";

import {
  addColumn,
  updateColumn,
  deleteColumn,
  getBoardById,
  filterCardsByPriority,
} from "../сolumns/operations.js";
import {
  addCard,
  updateCard,
  deleteCard,
  replaceCard,
} from "../cards/operations.js";
import { addBoard, deleteBoard } from "../boards/operations.js";

const columnsSlice = createSlice({
  name: "columns",
  initialState: {
    selectedBoard: {},
    columns: [],
    loading: false,
    error: null,
    allColumns: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обробка отримання даних про дошку з колонками та картками
      .addCase(getBoardById.fulfilled, (state, action) => {
        const { columnsAll } = action.payload.data;
        const { board } = action.payload.data;
        state.selectedBoard = board;
        // Оновлюємо стан колонок, отриманих з відповіді сервера
        state.columns = columnsAll.map((column) => ({
          ...column, // зберігаємо всі дані колонки
          cards: column.cards || [], // додаємо картки в колонку, якщо вони є
        }));
        state.allColumns = columnsAll;
      })
      .addCase(deleteBoard.fulfilled, (state) => {
        state.selectedBoard = {};
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.selectedBoard = action.payload.data;
      })
      // Додавання нової колонки

      .addCase(addColumn.fulfilled, (state, action) => {
        const newColumn = {
          ...action.payload.data, // данные колонки с сервера
          cards: [], // добавляем пустой массив `cards` только в Redux
        };
        state.columns.push(newColumn);
        // Додаємо нову колонку
      })

      // Оновлення колонки
      .addCase(updateColumn.fulfilled, (state, action) => {
        const updatedColumn = action.payload.data;
        const column = state.columns.find(
          (col) => col._id === updatedColumn._id
        );

        if (column) {
          column.title = updatedColumn.title;
        }
      })

      // Видалення колонки
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.columns = state.columns.filter(
          (column) => column._id !== action.payload
        );
      })

      // Додавання картки
      .addCase(addCard.fulfilled, (state, action) => {
        const column = state.columns.find(
          (col) => col._id === action.payload.data.columnId
        );
        if (column) {
          column.cards.push(action.payload.data); // Додаємо картку в колонку
        }
        state.allColumns = state.columns;
      })

      .addCase(updateCard.fulfilled, (state, action) => {
        const { _id, columnId, title, description, deadline, priority } =
          action.payload.data;

        const column = state.columns.find((col) => col._id === columnId);

        if (column) {
          const cardIndex = column.cards.findIndex((card) => card._id === _id);

          if (cardIndex !== -1) {
            column.cards[cardIndex] = {
              _id,
              title,
              description,
              deadline,
              priority,
              columnId,
            };
          }
        }
      })

      // Видалення картки
      .addCase(deleteCard.fulfilled, (state, action) => {
        const cardId = action.meta.arg;

        state.columns.forEach((column) => {
          const cardIndex = column.cards.findIndex(
            (card) => card._id === cardId
          );

          if (cardIndex !== -1) {
            column.cards.splice(cardIndex, 1);
          }
        });

        console.log(
          "Обновлённое состояние колонок:",
          JSON.stringify(state.columns, null, 2)
        );
      })
      .addCase(filterCardsByPriority.fulfilled, (state, action) => {
        state.columns = action.payload;
      })

      // Переміщення картки
      // .addCase(replaceCard.fulfilled, (state, action) => {
      //   const column = state.columns.find(
      //     (col) => col._id === action.payload.columnId
      //   );
      //   if (column) {
      //     column.cards = column.cards.map((card) =>
      //       card._id === action.payload._id ? action.payload : card
      //     );
      //   }
      // });
      .addCase(replaceCard.fulfilled, (state, action) => {
        const { data, oldColumnId } = action.payload;

        // Знаходимо стару колонку та видаляємо картку з неї
        const oldColumn = state.columns.find((col) => col._id === oldColumnId);
        if (oldColumn) {
          oldColumn.cards = oldColumn.cards.filter(
            (card) => card._id !== data._id
          );
        }

        // Додаємо картку в нову колонку
        const newColumn = state.columns.find(
          (col) => col._id === data.columnId
        );
        if (newColumn) {
          newColumn.cards.push(data);
        }
      });
  },
});

export const columnsReducer = columnsSlice.reducer;

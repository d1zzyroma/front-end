import { createSlice } from "@reduxjs/toolkit";
import {  
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
} from "./operations";
import {
  getColumns,
  addColumn,
  updateColumn,
  deleteColumn,
} from '../сolumns/operations.js';
import {
  getCards,
  addCard,
  updateCard,
  deleteCard,
  replaceCard,
} from '../cards/operations.js';
import { userCurrent } from "../auth/operations.js";

const boardsSlice = createSlice({
  name: "boards",
  initialState: {
    boards: [
      {
        boardName: "Bords name",
        id: "1",
  columns: [
    {
      columnTitle: "Column title 1",
      id: "1",
      bordId: "1",
      cards: [
        {
          cardTitle: "Card 1",
          columnId: "1",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 2",
          columnId: "1",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 3",
          columnId: "1",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 4",
          columnId: "1",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 5",
          columnId: "1",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 6",
          columnId: "1",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
      ],
    },
    {
      columnTitle: "Column title 2",
      id: "2",
      bordId: "1",
      cards: [
        {
          cardTitle: "Card 1",
          columnId: "2",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
      ],
    },
    {
      columnTitle: "Column title 3",
      id: "3",
      bordId: "1",
      cards: [
        {
          cardTitle: "Card 1",
          columnId: "3",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 2",
          columnId: "3",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 3",
          columnId: "3",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
      ],
    },
  ],
},

    ],
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
      })
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
      })
       .addCase(getCards.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.cards.push(action.payload);
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.cards = state.cards.map((card) =>
          card.id === action.payload.id ? action.payload : card
        );
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.cards = state.cards.filter(
          (card) => card.id !== action.payload
        );
      })
      .addCase(replaceCard.fulfilled, (state, action) => {
        state.cards = state.cards.map((card) =>
          card.id === action.payload.id ? action.payload : card
        );
      })
  },
});

export const boardsReducer = boardsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import {
  getCards,
  addCard,
  updateCard,
  deleteCard,
  replaceCard,
} from './operations';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const cardsReducer = cardsSlice.reducer;

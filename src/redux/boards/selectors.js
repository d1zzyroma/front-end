import { createSelector } from "@reduxjs/toolkit";

// Селектор для отримання всіх бордів
export const selectBoards = (state) => state.boards.boards;

// Селектор для отримання борду за ID
export const selectBoardById = (state, boardId) =>
  state.boards.boards.find((board) => board.id === boardId);

// Селектор для отримання всіх колонок борду за ID борду
export const selectColumnsByBoardId = createSelector(
  [selectBoardById],
  (board) => board?.columns || []
);

// Селектор для отримання колонки за ID борду і ID колонки
export const selectColumnById = (state, boardId, columnId) =>
  selectColumnsByBoardId(state, boardId).find((column) => column.id === columnId);

// Селектор для отримання карток у колонці за ID борду і ID колонки
export const selectCardsByColumnId = (state, boardId, columnId) => {
  const column = selectColumnById(state, boardId, columnId);
  return column ? column.cards : [];
};

// Селектор для отримання картки за ID борду, ID колонки та картки
export const selectCardById = (state, boardId, columnId, cardTitle) => {
  const cards = selectCardsByColumnId(state, boardId, columnId);
  return cards.find((card) => card.cardTitle === cardTitle);
};

// Селектор для отримання статусу завантаження
export const selectLoading = (state) => state.boards.loading;

// Селектор для отримання повідомлення про помилку
export const selectError = (state) => state.boards.error;


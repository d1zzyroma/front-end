// Список дошок
export const selectBoards = (state) => state.boards.boards;

// Статус завантаження дошок
export const selectLoading = (state) => state.boards.loading;

// Помилка, пов'язана з операціями над дошками.
export const selectError = (state) => state.boards.error;

// Список карток
export const selectCards = (state) => state.cards.cards;

// Статус завантаження карток
export const selectCardsLoading = (state) => state.cards.loading;

// Помилка, пов'язана з операціями над картками.
export const selectCardsError = (state) => state.cards.error;

// Список колонок
export const selectColumns = (state) => state.columns.columns;

// Статус завантаження колонок
export const selectColumnsLoading = (state) => state.columns.loading;

// Ппомилка, пов'язана з операціями над колонками.
export const selectColumnsError = (state) => state.columns.error;

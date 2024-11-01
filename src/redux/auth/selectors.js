import { createSelector } from '@reduxjs/toolkit';
export const selectAuthState = (state) => state.auth;

// Вказує, чи є користувач увійшовим в систему. Повертає булеве значення (true або false).
export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (auth) => auth.isLoggedIn
);

// Вибирає інформацію про користувача з стану аутентифікації. Повертає об'єкт user, що містить дані про поточного користувача.
export const selectUser = createSelector(
  selectAuthState,
  (auth) => auth.user
);

// Використовує selectUser для отримання імені користувача. Повертає значення name з об'єкта user.
export const selectUserName = createSelector(
  selectUser,
  (user) => user.name
);

// Для отримання електронної пошти користувача. Повертає значення email з об'єкта user.
export const selectUserEmail = createSelector(
  selectUser,
  (user) => user.email
);

// Для отримання URL-адреси аватара користувача. Повертає значення avatar з об'єкта user.
export const selectUserAvatar = createSelector(
  selectUser,
  (user) => user.avatar
);

// Для отримання теми, яку обрав користувач. Повертає значення theme з об'єкта user.
export const selectUserTheme = createSelector(
  selectUser,
  (user) => user.theme
);

// Для отримання токена авторизації. Повертає значення token, яке використовується для аутентифікації запитів до API.
export const selectToken = createSelector(
  selectAuthState,
  (auth) => auth.token
);

// Для перевірки, чи проходить процес оновлення токена. Повертає булеве значення isRefreshing, яке вказує, чи триває оновлення.
export const selectIsRefreshing = createSelector(
  selectAuthState,
  (auth) => auth.isRefreshing
);

import { createSelector } from '@reduxjs/toolkit';

export const selectAuthState = (state) => state.auth;

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (auth) => auth.isLoggedIn
);

export const selectUser = createSelector(
  selectAuthState,
  (auth) => auth.user
);

export const selectUserName = createSelector(
  selectUser,
  (user) => user.name
);

export const selectUserEmail = createSelector(
  selectUser,
  (user) => user.email
);

export const selectUserAvatar = createSelector(
  selectUser,
  (user) => user.avatar
);

export const selectUserTheme = createSelector(
  selectUser,
  (user) => user.theme
);

export const selectToken = createSelector(
  selectAuthState,
  (auth) => auth.token
);

export const selectIsRefreshing = createSelector(
  selectAuthState,
  (auth) => auth.isRefreshing
);

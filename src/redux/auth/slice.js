import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, updateUserProfile, updateUserTheme, needHelp } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    avatar: null,
    theme: "light",
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const { name, email, token } = action.payload;
        state.user = { name, email, avatar: null, theme: "light" };
        state.token = token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const { name, email, avatar, theme, token } = action.payload;
        state.user = { name, email, avatar, theme };
        state.token = token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null, avatar: null, theme: "light" };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        const { name, email, avatar, theme } = action.payload;
        state.user = { name, email, avatar, theme };
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateUserTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(needHelp.fulfilled, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

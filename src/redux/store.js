import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { authReducer } from './auth/slice';
import { columnsReducer } from './сolumns/slice.js';
import { cardsReducer } from './cards/slice.js';
import { boardsReducer } from './boards/slice.js';
import sideBarReducer from './sideBar/slice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    columns: columnsReducer,
    cards: cardsReducer,
    boards: boardsReducer,
    visibilitySideBar: sideBarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

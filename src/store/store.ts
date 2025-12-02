import { configureStore } from '@reduxjs/toolkit';
import { petsApi } from './slice/petsApi';
import favoritesReducer from './slice/favoritesSlice';

export const store = configureStore({
  reducer: {
    [petsApi.reducerPath]: petsApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

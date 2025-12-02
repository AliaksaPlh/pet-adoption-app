import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Pet } from '@/types/types';

interface FavoritesState {
  favorites: Pet[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Pet>) => {
      const pet = action.payload;
      const existingIndex = state.favorites.findIndex(
        (fav) => fav.id === pet.id
      );

      if (existingIndex >= 0) {
        // Удаляем из избранного
        state.favorites.splice(existingIndex, 1);
      } else {
        // Добавляем в избранное
        state.favorites.push(pet);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { toggleFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;

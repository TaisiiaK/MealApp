import { configureStore } from '@reduxjs/toolkit';

import favoritesSlice from './favorites';

const store = configureStore({
  reducer: {
    favoriteMeals: favoritesSlice,
  },
});

export default store;

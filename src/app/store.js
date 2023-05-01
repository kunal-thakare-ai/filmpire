import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';

import genreOrCategoryReducer from '../feactures/currentGenreOrCategory';
import userReducer from '../feactures/auth';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});

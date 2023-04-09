import { configureStore } from "@reduxjs/toolkit";
import newMovieReducer from "./slices/newMovieSlice";
import moviesSlice from "./slices/moviesSlice";

export const store = configureStore({
	reducer: {
		newMovie: newMovieReducer,
		movies: moviesSlice,
	},
});

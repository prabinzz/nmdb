import { configureStore } from "@reduxjs/toolkit";
import newMovieReducer from "./slices/newMovieSlice";

export const store = configureStore({
	reducer: {
		newMovie: newMovieReducer,
	},
});

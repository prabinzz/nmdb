import { createSlice } from "@reduxjs/toolkit";

export const moiviesSlice = createSlice({
	name: "moviesSlice",
	initialState: {
		genereFilterToggled: false,
		releaseDateFilterToggled: false,
		ratingFilterToggled: false,
		shortingFilterToggled: false,
		movies: [],
		search: "",
		filter: {
			type: "Movies",
			released: "",
			genere: [],
			rating: 0,
			shorting: "",
		},
	},
	reducers: {
		toggleGenereFilter: (state, payload) => {
			if (!state.genereFilterToggled) {
				state.releaseDateFilterToggled = false;
				state.ratingFilterToggled = false;
				state.shortingFilterToggled = false;
			}
			state.genereFilterToggled = !state.genereFilterToggled;
		},
		toggleReleasedDateFilter: (state, payload) => {
			if (!state.releaseDateFilterToggled) {
				state.genereFilterToggled = false;
				state.ratingFilterToggled = false;
				state.shortingFilterToggled = false;
			}
			state.releaseDateFilterToggled = !state.releaseDateFilterToggled;
		},
		toggleRatingFilterFilter: (state, payload) => {
			if (!state.ratingFilterToggled) {
				state.genereFilterToggled = false;
				state.releaseDateFilterToggled = false;
				state.shortingFilterToggled = false;
			}
			state.ratingFilterToggled = !state.ratingFilterToggled;
		},
		toggleShortingFilter: (state, payload) => {
			if (!state.shortingFilterToggled) {
				state.genereFilterToggled = false;
				state.releaseDateFilterToggled = false;
				state.ratingFilterToggled = false;
			}
			state.shortingFilterToggled = !state.shortingFilterToggled;
		},
		setMovies: (state, payload) => {
			state.movies = payload.payload;
		},
		setSearch: (state, payload) => {
			state.search = payload.payload;
		},
	},
});

export const {
	toggleGenereFilter,
	toggleReleasedDateFilter,
	toggleRatingFilterFilter,
	toggleShortingFilter,
	setMovies,
	setSearch,
} = moiviesSlice.actions;
export default moiviesSlice.reducer;

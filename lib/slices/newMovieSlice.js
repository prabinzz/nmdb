import { createSlice } from "@reduxjs/toolkit";

export const newMovieSlice = createSlice({
	name: "newMovieSlice",
	initialState: {
		name: "",
		tagsString: "",
		tags: [],
		released: "",
		genereString: "",
		generes: [],
		description: "",
	},
	reducers: {
		setMovieName: (state, payload) => {
			state.name = payload.payload;
		},
		setTags: (state, payload) => {
			state.tagsString = payload.payload;
			state.tags = state.tagsString.split(",");
		},
		setGenere: (state, payload) => {
			state.genereString = payload.payload;
			state.generes = state.genereString.split(",");
		},
		setDescription: (state, payload) => {
			state.description = payload.payload;
		},
		setReleased: (state, payload) => {
			state.released = payload.payload;
		},
	},
});

export const { setMovieName, setTags, setGenere, setDescription, setReleased } =
	newMovieSlice.actions;
export default newMovieSlice.reducer;

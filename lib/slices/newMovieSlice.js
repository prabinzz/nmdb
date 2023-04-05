import { createSlice } from "@reduxjs/toolkit";

export const newMovieSlice = createSlice({
	name: "newMovieSlice",
	initialState: {
		name: "",
		tagsString: "",
		tags: [],
	},
	reducers: {
		setMovieName: (state, payload) => {
			state.name = payload.payload;
		},
		setTags: (state, payload) => {
			state.tagsString = payload.payload;
			state.tags = state.tagsString.split(",");
		},
	},
});

export const { setMovieName, setTags } = newMovieSlice.actions;
export default newMovieSlice.reducer;

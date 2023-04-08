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
		likes: 0,
		views: 0,
		videoId: "",
		image: null,
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
		setVideoId: (state, payload) => {
			state.videoId = payload.payload;
		},
		setImage: (state, payload) => {
			state.image = payload.payload;
		},
	},
});

export const {
	setMovieName,
	setTags,
	setGenere,
	setDescription,
	setReleased,
	setLikes,
	setViews,
	setVideoId,
	setImage,
} = newMovieSlice.actions;
export default newMovieSlice.reducer;

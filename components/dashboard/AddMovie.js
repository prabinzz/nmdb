import {
	setMovieName,
	setTags,
	setDescription,
	setGenere,
	setReleased,
	setVideoId,
	setImage,
} from "@/lib/slices/newMovieSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { data } from "autoprefixer";
import axios from "axios";

const AddMovie = () => {
	const dispatch = useDispatch();
	const {
		name,
		tagsString,
		tags,
		genereString,
		generes,
		description,
		released,
		videoId,
		image,
	} = useSelector((state) => state.newMovie);
	const onSubmit = async (e) => {
		console.log(e.target.files);
		e.preventDefault();
		const formData = new FormData();
		formData.append("name", name);
		formData.append("tags", tags);
		formData.append("description", description);
		formData.append("released", released);
		formData.append("genres", generes);
		formData.append("videoid", videoId);
		formData.append("image", image);
		const response = await axios.post("/api/test", formData);
		console.log(response);
	};

	return (
		<div className="text-gray-200 w-full mt-8">
			<Header title="Add New Movie" />
			<form className="max-w-2xl px-8" onSubmit={onSubmit}>
				<div className="flex flex-col gap-4">
					<div className="flex flex-row gap-4">
						<div className="w-1/2">
							<label htmlFor="name"> Name:</label>
							<input
								className="w-full input-theme"
								type="text"
								onChange={(e) => dispatch(setMovieName(e.target.value))}
								value={name}
								name="name"
							/>
						</div>
						<div className="w-1/2">
							<label htmlFor="tags">Tags:</label>
							<input
								className="input-theme"
								type="text"
								onChange={(e) => dispatch(setTags(e.target.value))}
								value={tagsString}
								name="tags"
							/>
						</div>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="description">Description: </label>
						<textarea
							name="description"
							className="input-theme"
							onChange={(e) => dispatch(setDescription(e.target.value))}
							value={description}
							rows="10"
						></textarea>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="released">Released Date: </label>
						<input
							className="input-theme"
							type="date"
							onChange={(e) => dispatch(setReleased(e.target.value))}
							value={released}
							name="released"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="genere">Genere Date: </label>
						<input
							className="input-theme"
							type="text"
							onChange={(e) => dispatch(setGenere(e.target.value))}
							value={genereString}
							name="genere"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="genere">Youtube Video ID: </label>
						<input
							className="input-theme"
							type="text"
							onChange={(e) => dispatch(setVideoId(e.target.value))}
							value={videoId}
							name="videoid"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="genere">Image: </label>
						<input
							className=""
							type="file"
							onChange={(e) => dispatch(setImage(e.target.files[0]))}
							name="image"
						/>
					</div>
					<input
						className="bg-c-primary shadow-md w-24 px-3 py-2"
						type="submit"
						value="Submit"
					/>
				</div>
			</form>
		</div>
	);
};

export default AddMovie;

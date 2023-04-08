import {
	setMovieName,
	setTags,
	setDescription,
	setGenere,
	setReleased,
	setImage,
	setImageUrl,
} from "@/lib/slices/newMovieSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { data } from "autoprefixer";
import axios from "axios";

const AddCrew = () => {
	const dispatch = useDispatch();
	const {
		name,
		tagsString,
		tags,
		genereString,
		generes,
		description,
		released,
		image_url,
	} = useSelector((state) => state.newMovie);
	const onSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post("/api/test", {
			name: name,
			tags: tags,
			description: description,
			released: released,
			genres: generes,
		});
		console.log(response);
	};

	return (
		<div className="text-c-semi-dark w-full mt-8">
			<Header title="Add New AddCrew" />
			<form className="max-w-2xl px-8" onSubmit={onSubmit}>
				<div className="flex flex-col gap-4">
					<div className="flex flex-row gap-4">
						<div className="w-1/2">
							<label htmlFor="name"> Name:</label>
							<input
								className="w-full"
								type="text"
								onChange={(e) => dispatch(setMovieName(e.target.value))}
								value={name}
								name="name"
							/>
						</div>
						<div className="w-1/2">
							<label htmlFor="tags">Tags:</label>
							<input
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
							onChange={(e) => dispatch(setDescription(e.target.value))}
							value={description}
							rows="10"
						></textarea>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="released">Released Date: </label>
						<input
							type="date"
							onChange={(e) => dispatch(setReleased(e.target.value))}
							value={released}
							name="released"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="genere">Genere Date: </label>
						<input
							type="text"
							onChange={(e) => dispatch(setGenere(e.target.value))}
							value={genereString}
							name="genere"
						/>
					</div>
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
	);
};

export default AddCrew;

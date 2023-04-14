import { format } from "date-fns";
import React, { useState } from "react";
import { Section } from "../movies/MovieSingle";
import axios from "axios";
import Toast from "../Toast";

const UpdateMovieForm = ({ selectedMovie, setSelectedMovie }) => {
	const [toast, setToast] = useState({ message: "" });
	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(e);
		const data = await axios.post("/api/updateMovie", {
			id: selectedMovie.id,
			data: {
				name: selectedMovie.name,
				tags: selectedMovie.tags,
				description: selectedMovie.description,
				released: selectedMovie.released,
				genres: selectedMovie.genres,
				videoid: selectedMovie.videoid,
			},
		});
		if (data.status == 200) setToast({ message: "Updated Successfully" });
		else setToast({ message: "Update Faild" });
	};
	return (
		<form className="max-w-2xl" onSubmit={onSubmit}>
			<Section className="mt-8 mb-4" text="Edit" />
			<div className="flex flex-col gap-4">
				<div className="flex flex-row gap-4">
					<div className="w-1/2">
						<label htmlFor="name"> Name:</label>
						<input
							className="w-full input-theme"
							type="text"
							onChange={(e) =>
								setSelectedMovie((pre) => {
									return { ...pre, name: e.target.value };
								})
							}
							value={selectedMovie.name}
							name="name"
						/>
					</div>
					<div className="w-1/2">
						<label htmlFor="tags">Tags:</label>
						<input
							className="input-theme"
							type="text"
							onChange={(e) => {
								setSelectedMovie((pre) => {
									return { ...pre, tags: e.target.value.split(",") };
								});
							}}
							value={selectedMovie.tags.join(",")}
							name="tags"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full">
					<label htmlFor="description">Description: </label>
					<textarea
						name="description"
						onChange={(e) => {
							setSelectedMovie((pre) => {
								return { ...pre, description: e.target.value };
							});
						}}
						className="input-theme"
						value={selectedMovie.description}
						rows="10"
					></textarea>
				</div>
				<div className="flex flex-col w-full">
					<label htmlFor="released">Released Date: </label>
					<input
						className="input-theme"
						onChange={(e) =>
							setSelectedMovie((pre) => {
								return {
									...pre,
									released: new Date(e.target.value).toISOString(),
								};
							})
						}
						type="date"
						value={selectedMovie.released.substring(0, 10)}
						name="released"
					/>
				</div>
				<div className="flex flex-col w-full">
					<label htmlFor="genere">Genere: </label>
					<input
						className="input-theme"
						onChange={(e) => {
							setSelectedMovie((pre) => {
								return { ...pre, genres: e.target.value.split(",") };
							});
						}}
						type="text"
						name="genere"
						value={selectedMovie.genres.join(",")}
					/>
				</div>
				<div className="flex flex-col w-full">
					<label htmlFor="genere">Youtube Video ID: </label>
					<input
						className="input-theme"
						type="text"
						onChange={(e) =>
							setSelectedMovie((pre) => {
								return { ...pre, videoid: e.target.value };
							})
						}
						value={selectedMovie.videoid}
						name="videoid"
					/>
				</div>
				<div className="flex gap-4">
					<input
						className="bg-c-primary shadow-md w-24 px-3 py-2"
						type="submit"
						value="Update"
					/>

					<input
						onClick={() => setSelectedMovie([])}
						className="bg-c-primary shadow-md w-24 px-3 py-2"
						type="button"
						value="Clear"
					/>
					<input
						onClick={() => setSelectedMovie([])}
						className="bg-c-primary shadow-md w-24 px-3 py-2"
						type="button"
					/>
				</div>
			</div>
			{toast.message != "" && (
				<Toast
					message={toast.message}
					onClose={() => {
						setToast({ message: "" });
					}}
				/>
			)}
		</form>
	);
};

export default UpdateMovieForm;

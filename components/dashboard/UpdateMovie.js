import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import UpdateMovieForm from "./UpdateMovieForm";

const UpdateMovie = () => {
	const [searchName, setSearchName] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState([]);
	const fetchSearch = async (name) => {
		const data = await axios.get(`/api/movies?name=${name}`);
		if (data.status == 200) {
			setSearchResult(data.data);
		}
	};
	useEffect(() => {
		if (searchName != "") fetchSearch(searchName);
	}, [searchName]);
	return (
		<div className="text-gray-200 w-full mt-3">
			<Header title="Update Movie" />
			<div className="w-1/2">
				<label htmlFor="name"> Search Movie:</label>
				<input
					className="w-full input-theme"
					type="text"
					placeholder="Searh Movies"
					autoComplete="none"
					onChange={(e) => setSearchName(e.target.value)}
					value={searchName}
					name="name"
				/>
				<div
					className={`border-2 border-c-primary ${
						searchResult.length <= 0 ? "hidden" : "block"
					}`}
				>
					{searchResult.map((e, index) => (
						<div
							onClick={(e) => {
								setSelectedMovie(searchResult[index]);
								setSearchName("");
								setSearchResult([]);
							}}
							className="bg-white text-gray-700 hover:bg-gray-200 cursor-pointer  px-4 py-3"
						>
							{e.name}
						</div>
					))}
				</div>
			</div>
			{selectedMovie.name && (
				<UpdateMovieForm
					selectedMovie={selectedMovie}
					setSelectedMovie={setSelectedMovie}
				/>
			)}
		</div>
	);
};

export default UpdateMovie;

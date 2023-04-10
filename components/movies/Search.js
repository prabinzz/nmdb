import { setMovies, setSearch } from "@/lib/slices/moviesSlice";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BiSearch, BiLoaderCircle } from "react-icons/bi";

const Search = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [isFocused, setIsFcoused] = useState(false);
	const searchChangeHandle = async (e) => {
		setIsLoading(true);
		dispatch(setSearch(e.target.value));
		const data = await axios.get("/api/movies", {
			params: { name: e.target.value },
		});
		if (data.status == 200) {
			dispatch(setMovies(data.data));
		}
		setIsLoading(false);
		console.log(data);
	};
	return (
		<div
			className={`w-80 relative rounded-2xl py-1 ${
				isFocused ? "bg-white text-gray-700" : "bg-gray-700 text-gray-300"
			}`}
		>
			<div className="absolute top-3 left-2">
				{isLoading && (
					<div className="text-2xl animate-spin">
						<BiLoaderCircle />
					</div>
				)}
				{!isLoading && (
					<div className="text-2xl">
						<BiSearch />
					</div>
				)}
			</div>
			<input
				className={`bg-gary bg-transparent border-0 pl-12 focus:ring-0 focus:outline-none`}
				type="text"
				autoComplete="none"
				placeholder="Search"
				onFocus={() => setIsFcoused(true)}
				onBlur={() => setIsFcoused(false)}
				onChange={searchChangeHandle}
			/>
		</div>
	);
};

export default Search;

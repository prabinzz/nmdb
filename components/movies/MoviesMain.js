import React, { useEffect } from "react";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMovies } from "@/lib/slices/moviesSlice";
import MoviesCard from "./MoviesCard";
import Search from "./Search";

const MoviesMain = ({ className }) => {
	const dispatch = useDispatch();
	const { movies } = useSelector((state) => state.movies);
	const fetchMovies = async () => {
		const data = await axios.get("/api/movies");
		if (data.status == 200) {
			dispatch(setMovies(data.data));
		}
	};
	useEffect(() => {
		fetchMovies();
	}, []);
	return (
		<div className={`w-full ${className}`}>
			<div className="flex flex-col gap-10">
				<Search />
				<Filter />
				{movies.length <= 0 && <div> No Movies Found </div>}
				<div className="grid grid-cols-5 gap-4">
					{movies.length > 0 &&
						movies.map((movie) => <MoviesCard movie={movie} />)}
				</div>
			</div>
		</div>
	);
};

export default MoviesMain;

import axios from "axios";
import React, { useEffect, useState } from "react";

const CurrentRating = ({ userId, movieId }) => {
	const [rating, setRating] = useState("");
	const [totalRating, setTotalRating] = useState([]);
	const fetchRating = async () => {
		const result = await axios("/api/rate-movie?movieId", {
			params: { movieId: movieId },
		});
		if (result.status == 200) {
			setRating(result.data?._avg.rating);
			setTotalRating(result.data?._count.rating);
		}
	};
	useEffect(() => fetchRating, []);
	return (
		<div className="flex gap-3 flex-col">
			<div>
				<span className="">Avrage Rating: </span>
				<span className="">{rating}</span>
			</div>
			<div>
				<span className=" ">Total Rating: </span>
				<span className="">{totalRating}</span>
			</div>
		</div>
	);
};

export default CurrentRating;

import { useState } from "react";
import axios from "axios";
import { BiStar } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { Section } from "./MovieSingle";
import CurrentRating from "./CurrentRating";

const RatingMain = ({ movie, toast }) => {
	const [rating, setRating] = useState(0);
	const { data: session, status } = useSession();

	const handleStarClick = (value) => {
		setRating(value);
	};

	const handleRateMovie = async () => {
		try {
			const response = await axios.post("/api/rate-movie", {
				movieId: movie.id,
				userEmail: session.user.email,
			});
			toast("Rating Successfull");
			// Handle success
		} catch (error) {
			toast("Rating Faild");
			// Handle error
		}
	};

	return (
		<>
			<Section text="Rating" />
			<div className="flex flex-col max-w-sm">
				<CurrentRating userId={session.user.id} movieId={movie.id} />
				<h2 className="text-xl font-medium mb-2">Rate {movie.name}</h2>
				<div className="flex items-center gap-8">
					<div className="flex space-x-1">
						{[1, 2, 3, 4, 5].map((value) => (
							<BiStar
								key={value}
								className={`h-6 w-6 ${
									value <= rating ? "text-yellow-400" : "text-gray-300"
								} cursor-pointer`}
								onClick={() => handleStarClick(value)}
							/>
						))}
					</div>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
						onClick={handleRateMovie}
					>
						Rate
					</button>
				</div>
			</div>
		</>
	);
};

export default RatingMain;

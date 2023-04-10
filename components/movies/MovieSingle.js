import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import YoutubeEmbed from "../YoutubeEmbeded";
import ShareButtons from "../ShareButtons";
import Image from "next/image";
import { format } from "date-fns";

const Section = ({ text }) => {
	return (
		<div className="border-b-[1px] border-gray-700 text-2xl">
			<div className="border-b-4 block w-36 -z-10 pb-4 px-4 -translate-x-[1px] border-b-c-primary">
				{text}
			</div>
		</div>
	);
};
const MovieSingle = ({ className, id }) => {
	const [movie, setMovie] = useState(null);
	const fetchMovie = async (movieId) => {
		console.log(movieId);
		const movie = await axios.get(
			`http://localhost:3000/api/movies?id=${movieId}`
		);
		if (movie.status == 200) {
			setMovie(movie.data[0]);
		} else {
			setMovie(null);
		}
	};
	useEffect(() => {
		fetchMovie(id);
	}, [id]);

	return (
		<div className={`w-full ${className}`}>
			<div className="flex flex-col gap-8">
				<Search />
				{movie && (
					<div>
						<span className="text-gray-400">Movie / {movie.name}</span>
						<div className="mt-4">
							<YoutubeEmbed embedId={movie.videoid} />
						</div>
						<div>
							<ShareButtons className="my-8" />
						</div>
						<Section text="Overview" />
						<div className="flex mt-8 gap-12">
							<Image
								className=" w-40 h-auto object-cover aspect-[5/8]"
								width="1000"
								height="1000"
								src={movie.image}
							/>
							<div className="flex flex-col">
								<div className="font-light text-sm text-gray-200 flex gap-8">
									<div> Nepali </div>
									<div>{format(new Date(movie.released), "yyyy-mm-dd")}</div>
								</div>
								<div className="font-medium text-2xl mt-3">{movie.name}</div>
								<div className="mt-6">
									<div className="font-light text-sm text-gray-200">
										Genre / Catagory
									</div>
									<div>
										{movie.tags.map((e) => (
											<div className="mr-2 inline-block border-b-[1px]">
												{e}
											</div>
										))}
									</div>
								</div>
								<div className="mt-6 text-gray-300">{movie.description}</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default MovieSingle;

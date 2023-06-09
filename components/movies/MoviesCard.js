import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

const MoviesCard = ({ movie }) => {
	return (
		<div className="flex flex-col w-full  bg-[#1111] p-2">
			<div className="flex-grow group relative">
				<Image
					className=" w-full h-auto object-cover aspect-movieCardImg"
					width="1000"
					height="1000"
					src={movie.image}
				/>
				<div className="w-full h-full bg-black opacity-0 transition-all group-hover:opacity-80 absolute top-0 left-0">
					<div className="flex h-full flex-col items-center justify-center">
						<div>
							<Link href={`/home/movie?id=${movie.id}`}>
								<button className="bg-c-primary text-gray-200 px-3 py-2 rounded-xl shadow-md">
									View More
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<div className="">{movie.name}</div>
				<div className="text-sm text-gray-300">
					<span className="inline-block mr-2">Tags:</span>
					{movie.tags.map((e) => (
						<div className="mr-2 inline-block"> {e} </div>
					))}
				</div>
				<div className="text-gray-300">
					Released: {format(new Date(movie.released), "yyyy")}
				</div>
			</div>
		</div>
	);
};

export default MoviesCard;

import React, { useEffect, useState } from "react";
import Header from "../dashboard/Header";
import axios from "axios";
import { BsEye } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { useRouter } from "next/router";
import Toast from "../Toast";
const Items = ({ movie, toast, removieMovie }) => {
	const router = useRouter();
	const deleteMovie = async (id) => {
		const response = await axios.post("/api/delete-movie", {
			data: {
				id: id,
			},
		});
		if (response.status == 200) {
			toast({ message: "Movie Deleted sucessfully" });
			removieMovie(id);
		} else {
			toast({ message: "Movie Couldn't be deleted" });
		}
	};
	return (
		<tr className="bg-gray-800 hover:text-gray-700  hover:bg-white align-middle">
			<td className="px-16 py-2">
				<img
					className="h-8 w-8 rounded-full object-cover"
					src={movie.image}
					alt=""
				/>
			</td>
			<td>
				<span className="text-center ml-2 font-semibold">{movie.name}</span>
			</td>
			<td className="px-16 py-2">
				<span>{movie.tags}</span>
			</td>

			<td className="px-16">
				<span className="mr-4">
					<button
						onClick={() => router.push(`/home/movie?id=${movie.id}`)}
						className="p=2"
					>
						<BsEye className="hover:text-c-primary" />
					</button>
				</span>
				<span>
					<button className="p-2" onClick={(e) => deleteMovie(movie.id)}>
						<BiTrash className="hover:text-c-primary" />
					</button>
				</span>
			</td>
		</tr>
	);
};

const ViewMovies = () => {
	const [toast, setToast] = useState({ message: "" });
	const [movies, setMovies] = useState([]);
	const deleteMovie = (id) => {
		setMovies((pre) => {
			return pre.filter((i) => {
				console.log(i, id);
				if (i.id == id) return false;
				else return true;
			});
		});
	};
	const fetchMovies = async () => {
		let url = "/api/movies";
		const data = await axios.get(url, { data: {} });
		if (data.status == 200) {
			setMovies(data.data);
		}
	};
	useEffect(() => {
		fetchMovies();
	}, []);
	return (
		<div className="test-gray-200 w-full mt-3">
			<Header title="View Movie" />
			<div>
				<div className="min-w-full table-auto">
					<div className="">
						{movies.map((movie) => (
							<Items
								movie={movie}
								toast={setToast}
								removieMovie={deleteMovie}
							/>
						))}
					</div>
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
		</div>
	);
};

export default ViewMovies;

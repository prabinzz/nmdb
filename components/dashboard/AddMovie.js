import { setMovieName, setTags } from "@/lib/slices/newMovieSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddMovie = () => {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.newMovie);
	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="text-c-semi-dark w-full px-10">
			<form onSubmit={onSubmit}>
				<div className="flex flex-col">
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
								name="tags"
							/>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddMovie;

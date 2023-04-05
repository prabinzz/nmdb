import React from "react";
import { useSelector } from "react-redux";

const AddMovieSideValues = () => {
	const { name, tags } = useSelector((state) => state.newMovie);
	return (
		<div className="text-c-semi-dark">
			<div>Name: {name}</div>
			{/* {tags.map((tag) => (
				<div>{tag}</div>
			))} */}
		</div>
	);
};

export default AddMovieSideValues;

import React from "react";
import FilterIcon from "./FilterIcon";

const Display = () => {
	return <div>Test</div>;
};

const RatingFilter = ({ toggle, toggleVlaue }) => {
	return (
		<div className="relative" onClick={() => toggle()}>
			<div className="flex items-center gap-4">
				<p className="cursor-pointer">Rating</p>
				<FilterIcon trigger={toggleVlaue} />
			</div>
			<div className="absolute -bottom-5 left-0">
				{toggleVlaue && <Display />}
			</div>
		</div>
	);
};

export default RatingFilter;

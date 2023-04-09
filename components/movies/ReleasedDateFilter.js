import React from "react";
import FilterIcon from "./FilterIcon";

const Display = () => {
	return <div className="w-80 h-40 bg-white rounded-xl">Test</div>;
};

const ReleasedDateFilter = ({ toggle, toggleVlaue }) => {
	return (
		<div className="relative" onClick={() => toggle()}>
			<div className="flex items-center gap-4">
				<p className="cursor-pointer">Released Date</p>
				<FilterIcon trigger={toggleVlaue} />
			</div>
			<div className="absolute top-8 left-0">{toggleVlaue && <Display />}</div>
		</div>
	);
};

export default ReleasedDateFilter;

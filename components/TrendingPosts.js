import React from "react";

const TrendingPosts = ({ className }) => {
	return (
		<div>
			<div className={`${className} bg-c-semi-light h-10`}>
				<h1 className="text-3xl font-bold">Trending Posts</h1>
			</div>
		</div>
	);
};

export default TrendingPosts;

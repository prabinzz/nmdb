import React from "react";

const Header = ({ title }) => {
	return (
		<div>
			<h1 className="text-4xl font-bold font-roboto px-8 border-b mb-8">
				{title}
			</h1>
		</div>
	);
};

export default Header;

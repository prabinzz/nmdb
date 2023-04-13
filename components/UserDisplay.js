import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
const UserDisplay = ({ session }) => {
	const [expanded, setExpanded] = useState(false);
	return (
		<div className="relative">
			<img
				onClick={(e) => setExpanded(!expanded)}
				className="w-12 rounded-full"
				src={session.user.image}
			/>
			{expanded && (
				<div className=" flex flex-col gap-4 absolute top-14 text-gray-700 right-0 w-80 p-4 rounded-lg bg-white">
					<div>
						<span className="font-bold text-black">Name: </span>
						{session.user.name}
					</div>
					<div>
						<span className="font-bold text-black">Email: </span>{" "}
						{session.user.email}
					</div>
					<button onClick={signOut} className="btn">
						Log Out
					</button>
				</div>
			)}
		</div>
	);
};

export default UserDisplay;

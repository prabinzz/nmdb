import LoginNav from "@/components/loginNav";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const Home = () => {
	const { data: session, status } = useSession();
	const signoutHandler = () => {
		signOut();
	};
	return (
		<div>
			<LoginNav />
			<button onClick={signoutHandler}>Logout</button>
		</div>
	);
};

export default Home;

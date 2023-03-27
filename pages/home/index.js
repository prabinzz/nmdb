import { useSession } from "next-auth/react";
import React from "react";

const Home = () => {
	const { data: session, status } = useSession();
	return <div>{session ? <img src={session.user.image} /> : ""}</div>;
};

export default Home;

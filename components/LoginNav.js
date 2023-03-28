import { useSession } from "next-auth/react";
import React from "react";

const LoginNav = () => {
	const { data: session, status } = useSession();
	return session ? (
		<div>
			<img src={session.user.image} />{" "}
		</div>
	) : (
		<div></div>
	);
};

export default LoginNav;

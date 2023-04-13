import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const LoginCheck = ({ children }) => {
	const { data: session, status } = useSession();
	return (
		<div>
			{status == "authenticated" ? (
				children
			) : (
				<Link href="/auth/login">
					<button>Login</button>
				</Link>
			)}
		</div>
	);
};

export default LoginCheck;

import Toast from "@/components/Toast";
import YoutubeEmbed from "@/components/YoutubeEmbeded";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

const Home = () => {
	const { data: session, status } = useSession();
	const [toast, setToast] = useState(null);
	const signoutHandler = () => {
		signOut();
	};
	const toastHandle = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/test");
			const data = await response.json();
			setToast({ message: data.message });
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div>
			{/* <LoginNav /> */}
			<button onClick={signoutHandler}>Logout</button>
			<button onClick={toastHandle}>Toasttt </button>
			{toast && (
				<Toast
					message={toast.message}
					type="error"
					onClose={() => setToast(false)}
				/>
			)}
			<YoutubeEmbed embedId="Xer99UageNw" />
		</div>
	);
};

export default Home;

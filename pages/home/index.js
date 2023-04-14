import Loading from "@/components/Loading";
import Toast from "@/components/Toast";
import YoutubeEmbed from "@/components/YoutubeEmbeded";
import MoviesMain from "@/components/movies/MoviesMain";
import SideBar from "@/components/movies/SideBar";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

const Home = () => {
	const { data: session, status } = useSession();
	if (status === "loading") {
		return <Loading />;
	}
	const [toast, setToast] = useState(null);
	const signoutHandler = () => {
		signOut();
	};
	const toastHandle = async () => {
		try {
			const response = await fetch("/api/test");
			const data = await response.json();
			setToast({ message: data.message });
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="w-full absolute top-0 left-0 min-h-screen bg-c-primary">
			<div className="container-movies mx-auto bg-gray-900 rounded-3xl min-h-[90vh]">
				<div className="flex p-12">
					<SideBar className="w-80" />
					<MoviesMain className="" />
				</div>
				{/* <LoginNav />
			<button onClick={signoutHandler}>Logout</button>
			<button onClick={toastHandle}>Toasttt </button>
			{toast && (
				<Toast
				message={toast.message}
				type="error"
				onClose={() => setToast(false)}
				/>
				)}
			<YoutubeEmbed embedId="Xer99UageNw" /> */}
			</div>
		</div>
	);
};

export default Home;

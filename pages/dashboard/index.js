import Loading from "@/components/Loading";
import AddMovie from "@/components/dashboard/AddMovie";
import AddMovieSideValues from "@/components/dashboard/AddMovieSideValues";
import SideBar from "@/components/dashboard/SideBar";
import UpdateMovie from "@/components/dashboard/UpdateMovie";
import ViewMovies from "@/components/movies/ViewMovies";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Page() {
	const router = useRouter();
	const { page } = router.query;
	const redirectToLogin = (delay) => {
		setTimeout(() => router.push("/auth/login"), delay);
	};
	const { data: session, status } = useSession();
	if (status === "loading") {
		return <Loading />;
	}
	if (status === "unauthenticated") {
		return (
			<p>
				Access Denied. Redirecting to login page.
				{redirectToLogin(2000)}
			</p>
		);
	}
	return (
		<div className="w-full absolute top-0 left-0 min-h-screen bg-c-primary">
			<div className="container-movies mx-auto bg-gray-900 rounded-3xl min-h-[90vh] p-10">
				<div className="flex">
					<SideBar />
					<div className="flex-grow">
						{page == "new-movie" && <AddMovie />}
						{/* Other pages */}
						{page == "update-movie" && <UpdateMovie />}
						{page == "view-movie" && <ViewMovies />}
					</div>
				</div>
			</div>
		</div>
	);
}

import Loading from "@/components/Loading";
import AddMovie from "@/components/dashboard/AddMovie";
import AddMovieSideValues from "@/components/dashboard/AddMovieSideValues";
import SideBar from "@/components/dashboard/SideBar";
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
		<div className="flex bg-white">
			<SideBar />
			<div className="flex-grow">
				{page == "new-movie" && <AddMovie />}
				{/* Other pages */}
			</div>

			<div className="w-72 h-screen bg-gray-200">
				<AddMovieSideValues />
			</div>
		</div>
	);
}

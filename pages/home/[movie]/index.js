import MovieSingle from "@/components/movies/MovieSingle";
import SideBar from "@/components/movies/SideBar";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div className="w-full absolute top-0 left-0 min-h-screen bg-c-primary">
			<div className="container-movies mx-auto bg-gray-900 rounded-3xl min-h-[90vh]">
				<div className="flex p-12">
					<SideBar className="w-80" />
					<MovieSingle className="" id={id} />
				</div>
			</div>
		</div>
	);
};

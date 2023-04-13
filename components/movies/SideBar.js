import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
	BiFilm,
	BiTv,
	BiCameraMovie,
	BiCompass,
	BiGridAlt,
	BiTimeFive,
	BiTrendingUp,
} from "react-icons/bi";

import { FaTheaterMasks } from "react-icons/fa";

const SideItem = ({ text, icon, onClick }) => {
	return (
		<div className="cursor-pointer" onClick={onClick}>
			<div className="flex gap-4 items-center text-gray-300 hover:text-gray-50">
				<div className="text-[1.2em]">{icon}</div>
				<div>{text}</div>
			</div>
		</div>
	);
};

const SideBar = ({ className }) => {
	const router = useRouter();
	return (
		<div className={`gap-3 flex flex-col ${className}`}>
			<SideItem
				text="Movies"
				icon={<BiFilm />}
				onClick={() => {
					router.push("/home");
				}}
			/>
			<SideItem
				text="TV Shows"
				icon={<BiTv />}
				onClick={() => {
					router.push("/home");
				}}
			/>
			<div className="w-full mt-2"></div>
			<SideItem
				text="Action"
				icon={<BiCameraMovie />}
				onClick={() => {
					router.push("/home?catagory=action");
				}}
			/>
			<SideItem
				text="Adventure"
				icon={<BiCompass />}
				onClick={() => {
					router.push("/home?catagory=adventure");
				}}
			/>
			<SideItem
				text="Drama"
				icon={<FaTheaterMasks />}
				onClick={() => {
					router.push("/home?catagory=drama");
				}}
			/>
			<SideItem
				text="All"
				icon={<BiGridAlt />}
				onClick={() => {
					router.push("/home");
				}}
			/>
			<div className="w-full mt-2"></div>
			<SideItem
				text="Latest"
				icon={<BiTimeFive />}
				onClick={() => {
					router.push("/home?short=latest");
				}}
			/>
			<SideItem
				text="Trending"
				icon={<BiTrendingUp />}
				onClick={() => {
					router.push("/home?catagory=trending");
				}}
			/>
		</div>
	);
};

export default SideBar;

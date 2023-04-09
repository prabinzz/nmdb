import Link from "next/link";
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
	return (
		<div className={`gap-3 flex flex-col ${className}`}>
			<SideItem
				text="Movies"
				icon={<BiFilm />}
				onClick={() => {
					console.log("test");
				}}
			/>
			<SideItem
				text="TV Shows"
				icon={<BiTv />}
				onClick={() => {
					console.log("test");
				}}
			/>
			<div className="w-full mt-2"></div>
			<SideItem
				text="Action"
				icon={<BiCameraMovie />}
				onClick={() => {
					console.log("test");
				}}
			/>
			<SideItem
				text="Adventure"
				icon={<BiCompass />}
				onClick={() => {
					console.log("test");
				}}
			/>
			<SideItem
				text="Drama"
				icon={<FaTheaterMasks />}
				onClick={() => {
					console.log("test");
				}}
			/>
			<SideItem
				text="All"
				icon={<BiGridAlt />}
				onClick={() => {
					console.log("test");
				}}
			/>
			<div className="w-full mt-2"></div>
			<SideItem
				text="Latest"
				icon={<BiTimeFive />}
				onClick={() => {
					console.log("test");
				}}
			/>
			<SideItem
				text="Trending"
				icon={<BiTrendingUp />}
				onClick={() => {
					console.log("test");
				}}
			/>
		</div>
	);
};

export default SideBar;

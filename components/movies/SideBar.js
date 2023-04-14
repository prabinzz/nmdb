import { setCatogory } from "@/lib/slices/moviesSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../public/images/logo.png";
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
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

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
	const { catagory } = useSelector((state) => state.movies);
	const dispatch = useDispatch();
	const router = useRouter();
	return (
		<div className={`gap-3 flex flex-col ${className}`}>
			<Link href="/home">
				<div className="w-[200px] mb-8">
					<Image width="200" height="200" src={Logo} alt="Logo"></Image>
				</div>
			</Link>
			<SideItem
				text="Movies"
				icon={<BiFilm />}
				onClick={() => {
					router.push("/home");
					dispatch(setCatogory("All"));
				}}
			/>
			<SideItem
				text="TV Shows"
				icon={<BiTv />}
				onClick={() => {
					router.push("/home");
					dispatch(setCatogory("All"));
				}}
			/>
			<div className="w-full mt-2"></div>
			<SideItem
				text="Action"
				icon={<BiCameraMovie />}
				onClick={() => {
					router.push("/home?catagory=action");
					dispatch(setCatogory("Action"));
				}}
			/>
			<SideItem
				text="Adventure"
				icon={<BiCompass />}
				onClick={() => {
					router.push("/home?catagory=adventure");
					dispatch(setCatogory("Adventure"));
				}}
			/>
			<SideItem
				text="Drama"
				icon={<FaTheaterMasks />}
				onClick={() => {
					router.push("/home?catagory=drama");
					dispatch(setCatogory("Drama"));
				}}
			/>
			<SideItem
				text="All"
				icon={<BiGridAlt />}
				onClick={() => {
					router.push("/home");
					dispatch(setCatogory("All"));
				}}
			/>
			<div className="w-full mt-2"></div>
			<SideItem
				text="Latest"
				icon={<BiTimeFive />}
				onClick={() => {
					router.push("/home?short=latest");
					dispatch(setCatogory("All"));
				}}
			/>
			<SideItem
				text="Trending"
				icon={<BiTrendingUp />}
				onClick={() => {
					router.push("/home?catagory=trending");
					dispatch(setCatogory("All"));
				}}
			/>
		</div>
	);
};

export default SideBar;

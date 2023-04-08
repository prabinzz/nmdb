import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import React from "react";
import { BsPersonFillAdd as CrewIcon } from "react-icons/bs";
import { BiMovie as MovieIcon } from "react-icons/bi";

const SideItem = ({ href, name, icon }) => {
	return (
		<Link href={href}>
			<div className=" text-xl px-3 py-2 flex items-center gap-4 border-b-2 hover:border-c-primary border-white">
				<div className="text-base">{icon}</div>
				<p>{name}</p>
			</div>
		</Link>
	);
};

const SideBar = () => {
	return (
		<div className="w-72 min-h-screen border-r">
			<div className="flex flex-col text-c-semi-dark">
				<div className="w-[200px] mx-auto mt-8">
					<Image width="200" height="200" src={Logo} alt="Logo"></Image>
				</div>
				<SideItem
					href="/dashboard?page=new-movie"
					name="Add Movie"
					icon={<MovieIcon />}
				/>
				<SideItem
					href="/dashboard?page=new-crew"
					name="Add Crew"
					icon={<CrewIcon />}
				/>
			</div>
		</div>
	);
};

export default SideBar;

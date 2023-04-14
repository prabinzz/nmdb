import Link from "next/link";
import Logo from "../../public/images/logo.png";
import React from "react";
import { BsViewList, BsPersonFillAdd as CrewIcon } from "react-icons/bs";
import { BiMovie as MovieIcon } from "react-icons/bi";
import Image from "next/image";

const SideItem = ({ href, name, icon }) => {
	return (
		<Link href={href}>
			<div className=" text-xl px-3 text-gray-300 py-2 flex items-center gap-4">
				<div className="text-base">{icon}</div>
				<p>{name}</p>
			</div>
		</Link>
	);
};

const SideBar = ({ className }) => {
	return (
		<div className={`w-72 min-h-screen ${className}`}>
			<div className="flex flex-col text-c-semi-dark">
				<Link href="/home">
					<div className="w-[200px] mb-8">
						<Image width="200" height="200" src={Logo} alt="Logo" />
					</div>
				</Link>
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
				<SideItem
					href="/dashboard?page=update-movie"
					name="Update Movie"
					icon={<CrewIcon />}
				/>
				<SideItem
					href="/dashboard?page=view-movie"
					name="View Movie"
					icon={<BsViewList />}
				/>
			</div>
		</div>
	);
};

export default SideBar;

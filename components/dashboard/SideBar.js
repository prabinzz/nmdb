import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import React from "react";

const SideBar = () => {
	return (
		<div className="w-72 min-h-screen bg-c-semi-dark">
			<div className="w-[200px] mx-auto mt-8">
				<Image width="200" height="200" src={Logo} alt="Logo"></Image>
			</div>
			<Link href="/dashboard?page=new-movie">
				<p>Test</p>
			</Link>
			<Link href="/dashboard?page=test">
				<p>Test</p>
			</Link>
			<p>Test</p>
		</div>
	);
};

export default SideBar;

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import React from "react";

const SideBar = () => {
	return (
		<div className="w-72 min-h-screen bg-c-semi-dark">
			<div>
				<Image width="100" height="100" src={Logo}></Image>
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

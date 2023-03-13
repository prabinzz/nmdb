import Link from "next/link";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";

const NavHome = () => {
	const [navToggle, setNavToggle] = useState(false);
	return (
		<nav className="mx-8 pt-8 font-medium relative">
			<div
				className="sm:hidden flex items-center gap-2 hover:text-c-primary cursor-pointer"
				onClick={() => setNavToggle(!navToggle)}
			>
				<AiOutlineBars className="text-lg" />
				<span>Menu</span>
			</div>
			<div
				className={`max-sm:flex max-sm:flex-col max-sm:top-20 max-sm:bg-c-semi-dark/80 max-sm:w-full 
        max-sm:text-center max-sm:text-xl max-sm:gap-4 max-sm:py-4 max-sm:rounded-xl ${
					navToggle ? "absolute" : "max-sm:hidden"
				}`}
			>
				<Link href="/">
					<li className="list-none inline-block mr-8 hover:text-c-primary">
						Home
					</li>
				</Link>
				<Link href="/">
					<li className="list-none inline-block mr-8 hover:text-c-primary">
						Home
					</li>
				</Link>
				<Link href="/">
					<li className="list-none inline-block mr-8 hover:text-c-primary">
						Home
					</li>
				</Link>
				<Link href="/">
					<li className="list-none inline-block mr-8 hover:text-c-primary">
						Home
					</li>
				</Link>
				<Link href="/">
					<li className="list-none inline-block mr-8 hover:text-c-primary">
						Home
					</li>
				</Link>
			</div>
		</nav>
	);
};

export default NavHome;

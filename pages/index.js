import NavHome from "@/components/NavHome";
import TopSearch from "@/components/TopSearch";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
	return (
		<>
			<div className="bg-[url(/images/cover1.jpg)] w-full bg-no-repeat bg-center bg-fixed bg-cover">
				<div className="bg-c-dark/75 w-full h-full">
					<div className="container relative w-full mx-auto">
						<NavHome />
						<div className="md:w-[60%]">
							<div className="mx-8 pt-14 md:pt-20 lg:pt-28">
								<img
									src="/images/logo.png"
									className="h-[60px] max-sm:mx-auto"
								></img>
							</div>
							{/* Search Box */}
							<div className="flex mx-8 gap-4 mt-8">
								<div className="w-full">
									<input
										className="w-full text-c-semi-dark rounded-full font-2xl px-8 py-4 focus:ring-0 focus:outline-0"
										type="text"
										placeholder="Search Movies"
									/>
								</div>
								<div className="rounded-full h-full text-2xl  p-4 bg-c-primary">
									<AiOutlineSearch />
								</div>
							</div>
							<div>
								<TopSearch className="mt-8 mx-8 pb-14 md:pb-20 lg:pb-28" />
							</div>
						</div>
						{/* Rajesh dai ko pic*/}
						<div className="absolute bottom-0 md:-right-40 overflow-hidden max-md:hidden">
							<img className="w-[80%]" src="/images/display1.png" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

import NavHome from "@/components/NavHome";

export default function Home() {
	return (
		<>
			<div className="bg-[url(/images/cover1.jpg)] w-full bg-no-repeat bg-conter bg-fixed bg-cover">
				<div className="bg-c-dark/75 w-full h-full">
					<NavHome />
					<div className="mx-8 pt-14">
						<img
							src="/images/logo.png"
							className="h-[60px] max-sm:mx-auto"
						></img>
					</div>
				</div>
			</div>
			<h1 className="text-2xl color-red">Test</h1>
		</>
	);
}

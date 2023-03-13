import Link from "next/link";

const TopSearch = ({ className }) => {
	const linkClass = "ml-3 hover:text-c-primary text-c-semi-light";
	const topSearchList = [
		"Chhakka Panja 2",
		"Ya Memro Hazur 2",
		"Nai na bhannu la",
		"Chhakka Panja 2",
		"Ya Memro Hazur 2",
		"Nai na bhannu la",
		"Chhakka Panja 2",
	];
	return (
		<div className={className}>
			<span className="font-medium">Top Search:</span>
			{topSearchList.map((i, index) => (
				<Link className={linkClass} href="/">
					{index + 1 < topSearchList.length ? i + "," : i}
				</Link>
			))}
		</div>
	);
};

export default TopSearch;

const FilterIcon = ({ trigger }) => {
	const notToggledfirst = "transition-all h-[2px] w-[15px]  bg-white";
	const notToggledsecond = "transition-all h-[2px] w-[8px]  bg-white";
	const togglefirst = "transition-all h-[2px] w-[15px]  bg-white rotate-45";
	const togglesecond = "transition-all h-[2px] w-[15px]  bg-white -rotate-45";
	return (
		<div className={` p-0 m-0 ${trigger ? "" : "flex flex-col gap-2"}`}>
			<div className={`${trigger ? togglefirst : notToggledfirst}`}></div>
			<div className={`${trigger ? togglesecond : notToggledsecond}`}></div>
		</div>
	);
};

export default FilterIcon;

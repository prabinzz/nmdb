import {
	toggleGenereFilter,
	toggleReleasedDateFilter,
	toggleRatingFilterFilter,
	toggleShortingFilter,
} from "@/lib/slices/moviesSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GenereFilter from "./GenereFilter";
import ReleasedDateFilter from "./ReleasedDateFilter";
import RatingFilter from "./RatingFilter";
import ShortingFilter from "./ShortingFilter";

const Filter = () => {
	const dispatch = useDispatch();
	const {
		genereFilterToggled,
		releaseDateFilterToggled,
		ratingFilterToggled,
		shortingFilterToggled,
		filter,
	} = useSelector((state) => state.movies);
	return (
		<div className="flex gap-4 items-center">
			<div className="font-bold text-2xl mr-8">{filter.type}</div>
			<GenereFilter
				toggle={() => dispatch(toggleGenereFilter())}
				toggleVlaue={genereFilterToggled}
			/>
			<ReleasedDateFilter
				toggle={() => dispatch(toggleReleasedDateFilter())}
				toggleVlaue={releaseDateFilterToggled}
			/>
			<RatingFilter
				toggle={() => dispatch(toggleRatingFilterFilter())}
				toggleVlaue={ratingFilterToggled}
			/>
			<ShortingFilter
				toggle={() => dispatch(toggleShortingFilter())}
				toggleVlaue={shortingFilterToggled}
			/>
		</div>
	);
};

export default Filter;

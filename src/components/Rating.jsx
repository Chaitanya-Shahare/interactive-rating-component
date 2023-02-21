import React from "react";

const Rating = ({color, ratingValue, rating}) => {

	// console.log(color);
	// console.log(rating, ratingValue)

	return (
		<div className={ `card-1__rating-container__rating ${ratingValue === rating ? "card-1__rating-container__rating--selected" : ""}` }>
			<p>{ratingValue}</p>
		</div>
	);
};

export default Rating;

import Rating from "./Rating";
import { useState } from "react";

const RatingComponent = ({rating, setRating}) => {

	// const [rating, setRating] = useState(0);

	return (
		<>				
			<div className='card-1__rating-container'>
				{/* rating component */}

				{/* {[...Array(5)].map(( rating, i ) => { */} 
				{/* 	let ratingValue = i + 1; */}
				{/* 	return <label> */}
				{/* 		<input className='radio--hidden' type={"radio"} name="rating" */}
				{/* 			value={ratingValue} */}
				{/* 			onClick={() => { setRating(ratingValue); setIsSelected(true)  }} */}
				{/* 			checked={true} */}
				{/* 		/> */}
				{/* 		<Rating */} 
				{/* 			ratingValue={ratingValue} */}
				{/* 			rating={rating} */}
				{/* 			color={ratingValue === rating ? "MediumGrey" : "DarkGrey"} */}
				{/* 			onSelect={() => { setRating(ratingValue) }} */}
				{/* 		/> */}
				{/* 	</label> */}
				{/* })} */}



				{
					[...Array(5)].map((btn, i) => {

						let ratingValue = i + 1;
						return (
							<label>
								<input className="radio--hidden" type="radio" name="rating"
									value={ratingValue}
									onClick={() => {setRating(ratingValue)}}
								/>
								<Rating
									ratingValue={ratingValue}
									rating={rating}
								/>
							</label>
						)
				})
				}	




			</div>
		</>
	)
}

export default RatingComponent;

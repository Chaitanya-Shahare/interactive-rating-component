import logo from './logo.svg';
import star from './images/icon-star.svg'
import graphic from './images/illustration-thank-you.svg'
import './App.css';
import Rating from './components/Rating';
import {useEffect, useState} from 'react';
import RatingComponent from './components/RatingComponents';

function App() {

	const [rating, setRating] = useState(0);

	const [isSubmitted, setIsSubmitted] = useState(false);

	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		console.log(rating);
	}, [rating])

  return (

    <div className="App">

		<div className='card'>

{/* ------------------------------------------------------------------------------------------------------ */}

			<div className={ `card-1 ${isSubmitted ? "hidden" : ""}` }>
				<div className="card-1__logo">
				<img className='card-1__logo__star' src={star}/>
				</div>

				<h2 className='card-1__heading'>
				How did we do?
				</h2>

				<div className='card-1__para'>
				Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
				</div>

				<RatingComponent
					rating={rating}
					setRating={setRating}
				/>

				<div className='card-1__submit-btn'
					onClick={() => setIsSubmitted(true)}
				>
					SUBMIT
				</div>
			</div>

{/* ------------------------------------------------------------------------------------------------------ */}

			<div className={ `card-2 ${isSubmitted ? "" : "hidden"}` }>
				<img className="card-2__graphic" src={graphic} />

				<div className='card-2__rating'>
					You selected {rating} out of 5
				</div>

				<h2 className='card-2__heading'>Thank You!</h2>
				
				<div className='card-2__para'>
					We appreciate you taking the time to give a rating.
					If you ever need more support, don't hesitate to get in touch!
				</div>
				
			</div>
{/* ------------------------------------------------------------------------------------------------------ */}
		</div>

    </div>
  );
}

export default App;

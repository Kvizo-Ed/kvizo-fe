import '../scss/Home.scss';
import multipleChoice from '../assets/multiple-choice.png';
import bingo from '../assets/bingo.png';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

const Home = () => {

	return (
		<section className='home'>
			<div className='home-greeting-container'>
				<p className='home-greeting'>The worlds most advanced quiz creator. Utilizing nano technology we are able to inject the knowlege directly into your students brain.</p>
			</div>
			<div className='build-quiz-container'>
				<label className='button-title' >Build a <br/>quiz?</label>
				<div className='img-container'>
					<Link to='/create' className='icon-link' ><img className='icon' src={multipleChoice} alt='multiple-choice.png' /></Link>
					<img className='icon' src={bingo} alt='bingo.png' />
				</div>
			</div>
		</section>
	)
}

export default Home;

// Home.propTypes = {
//   data: PropTypes.object,
//   handleSubClick: PropTypes.func,
//   handleFavClick: PropTypes.func,
//   subscriptions: PropTypes.object
// };
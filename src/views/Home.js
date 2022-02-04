import '../scss/Home.scss';
// import PropTypes from 'prop-types';

const Home = () => {

	return (
		<section className='home'>
			<p className='home-greeting'>The worlds most advanced quiz creator. Utilizing nano technology we are able to inject the knowlege directly into your students brain.</p>
			<div className='build-quiz-container'>
				<button className='multiple-choice button'>Multiple Choice</button>
				<button className='true-or-false button'>True or False</button>
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
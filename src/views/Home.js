import '../scss/Home.scss';
import multipleChoice from '../assets/multiple-choice.png';
import bingo from '../assets/bingouc.png';
import { Link } from 'react-router-dom'

const Home = () => {

	return (
		<section className='home'>
			<div className='home-greeting-container'>
				<p className='home-greeting'>PlaceHolder - The worlds most advanced quiz creator. Utilizing nano technology we are able to inject the knowlege directly into your students brain.</p>
			</div>
			<div className='build-quiz-container'>
				<label className='button-title' >Build a <br/>quiz?</label>
				<div className='img-container'>
					<Link to='/create' className='icon-link' ><img className='icon' src={multipleChoice} alt='multiple-choice.png' /></Link>
					<img src={bingo} alt='bingo.png' />
				</div>
			</div>
		</section>
	)
}

export default Home;
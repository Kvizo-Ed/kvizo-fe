import '../scss/Home.scss';
import multipleChoice from '../assets/multiple-choice.png';
import bingo from '../assets/bingouc.png';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getQuote } from '../services/fetchAPIs'

const Home = () => {

	const [quote, setQuote] = useState('')

	async function fetchQuote() {
		let quotes = await getQuote()
		let randomNumber = Math.floor(Math.random() * quotes.length)
		setQuote(quotes[randomNumber])
	}

	useEffect(() => {
		fetchQuote()
	}, [])


	return (
		<section className='home'>
			<div className='home-greeting-container'>
				{quote.author ? <p className='quote-header' >- {quote.author}</p>
				: <p className='quote-header' >- Unknown</p>
				}
				<p className='home-greeting'>{quote.text}.</p>
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
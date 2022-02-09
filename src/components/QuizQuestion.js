import '../scss/QuizQuestion.scss';
import { RiCloseCircleFill } from 'react-icons/ri'

function quizQuestion({question, setPreviewOpen}) {

	function shuffle(array) {
		let currentIndex = array.length, randomIndex
		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex--
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
		}
		return array
	}

	let questionArr = Object.keys(question)
	questionArr.shift()
	shuffle(questionArr)
	

	let questions = questionArr.map((element, index) => {
		return <div className='answer' key={index}>
						<label className='answer-label'>{ String.fromCharCode(index + 1 + 64)}</label>
						<p>{element}</p>
					</div>
	})

	console.log(questions)


	return (
		<section className="quiz-question-container">
			<button onClick={(e) => setPreviewOpen(false)} className="close-btn" ><RiCloseCircleFill size='4vw'/></button>
			<div className='quiz-question' >
				<div className='quiz-question-description'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non volutpat libero. Nam mi sem, dictum ac blandit luctus, rhoncus non ipsum. Sed venenatis in nibh sit amet dictum. Nulla sodales sodales mi in sagittis. Mauris nec justo mattis, pulvinar tortor eu, tempus erat. Aliquam a dapibus nisi. Curabitur diam turpis, fringilla non est a, luctus feugiat mi. Vestibulum interdum ex dui, eget viverra nisl placerat vel. Vivamus molestie ultrices justo. Praesent ac mi tellus. Integer sodales nibh quis faucibus egestas. Morbi sit amet risus mi. Aliquam erat volutpat. Ut eleifend nunc sapien, posuere porttitor tellus consequat non. Aliquam erat volutpat.</p>
				</div>
					<div className='answers-container'>
						{questions}
					</div>
			</div>
		</section>
	);
}

export default quizQuestion;
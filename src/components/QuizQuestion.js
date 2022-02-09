import '../scss/QuizQuestion.scss';
import { RiCloseCircleFill } from 'react-icons/ri'
import { shuffle } from '../services/utils.js'

function quizQuestion({question, setPreviewOpen}) {

	let questionAnswers = Object.values(question)
	questionAnswers.shift()
	shuffle(questionAnswers)


	let questions = questionAnswers.map((element, index) => {
		return (
					<div className='answer' key={index}>
						<label className='answer-label'>{ String.fromCharCode(index + 1 + 64)}</label>
						<p>{element}</p>
					</div>
		)
	})

	return (
		<section className="quiz-question-container">
			<button onClick={(e) => setPreviewOpen(false)} className="close-btn" ><RiCloseCircleFill size='4vw'/></button>
			<div className='quiz-question' >
				<div className='quiz-question-description'>
					<p>{question.questionText}</p>
				</div>
					<div className='answers-container'>
						{questions}
					</div>
			</div>
		</section>
	);
}

export default quizQuestion;
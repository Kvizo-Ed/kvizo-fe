import '../scss/QuizQuestion.scss'
import { shuffle } from '../services/utils.js'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function QuizQuestion({ quiz }) {

	let { id } = useParams();

	let parsedId = parseInt(id)

	let navigate = useNavigate()

	let quizQuestion = quiz.attributes.questions[parsedId - 1]
	console.log(quiz.attributes.questions.length)

	let answers = quizQuestion.possibleAnswers.map((element, index) => {
		return (
					<div className='answer' key={index}>
						<label className='answer-label'>{ String.fromCharCode(index + 1 + 64)}</label>
						<p>{element}</p>
					</div>
		)
	})

	return (
		<section className="quiz-question-container">
				<button disabled={parsedId - 1 == 0} onClick={() => {navigate(`/quiz/${quiz.id}/question/${parsedId - 1}`)}}>Prev</button>
			<div className='quiz-question' key={id}>
				<div className='quiz-question-description'>
					<p>{quizQuestion.questionText}</p>
				</div>
				<div className='answers-container'>
						{answers}
				</div>
			</div>
			<button disabled={parsedId + 1 > quiz.attributes.questions.length} onClick={() => {navigate(`/quiz/${quiz.id}/question/${parsedId + 1}`)}}>Next</button>
		</section>
	);
}

export default QuizQuestion;
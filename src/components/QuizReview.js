import '../scss/QuizQuestion.scss'
import '../scss/QuizReview.scss'
import { useParams, useNavigate } from 'react-router-dom'


function QuizReview({currentQuiz, status}) {

	let { id } = useParams()
	let parsedId = parseInt(id)
	let navigate = useNavigate()
	let quizQuestion = currentQuiz.attributes.questions[parsedId - 1]

	function findActiveStyle(element) {
		if(element === status[id].correctAnswer) {
			return 'answer active green'
		}
		if(element === status[id].activeAnswer) {
			return 'answer active red'
		}
		return 'answer inactive'
	}

	let answers = quizQuestion.possibleAnswers.map((element, index) => {
		return (
					<div className={findActiveStyle(element)} key={index}>
						<label className='answer-label'>{ String.fromCharCode(index + 1 + 64)}</label>
						<p>{element}</p>
					</div>
		)
	})

	return (
			<section className="quiz-question-container">
			<button disabled={parsedId - 1 === 0} onClick={() => {navigate(`/quiz/${currentQuiz.id}/score/review/${parsedId - 1}`)}}>Prev</button>
			<div className='quiz-question' key={id}>
				<div className='quiz-question-description'>
					<p>{quizQuestion.questionText}</p>
				</div>
				<div className='answers-container'>
					{answers}
				</div>
			</div>
			<button disabled={parsedId + 1 > currentQuiz.attributes.questions.length} onClick={() => {navigate(`/quiz/${currentQuiz.id}/score/review/${parsedId + 1}`)}}>Next</button>
		</section>
	);
}

export default QuizReview;
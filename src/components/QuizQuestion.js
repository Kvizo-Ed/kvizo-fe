import '../scss/QuizQuestion.scss'
import { useParams, useNavigate } from 'react-router-dom'


function QuizQuestion({ currentQuiz, changeStatus, status }) {

	let { id } = useParams()
	let parsedId = parseInt(id)
	let navigate = useNavigate()
	let quizQuestion = currentQuiz.attributes.questions[parsedId - 1]

	const toggleActive = (index) => {
		console.log(status[id])
		changeStatus(status => ({
			...status,
				[id]: {
					...status[id],
						activeAnswer: status[id].answers[index]
				}
		}))
	}

	const toggleActiveStyle = (index) => {
			if(status[id].answers[index] === status[id].activeAnswer) {
					return `answer active`
			} else {
					return `answer inactive`
			}
	}

	function handleClick(index) {
		toggleActive(index)
	}

	let answers = quizQuestion.possibleAnswers.map((element, index) => {
		return (
					<div className={toggleActiveStyle(index)} key={index} onClick={(e) => {handleClick(index)}}>
						<label className='answer-label'>{ String.fromCharCode(index + 1 + 64)}</label>
						<p>{element}</p>
					</div>
		)
	})

	return (
		<section className="quiz-question-container">
			<button disabled={parsedId - 1 == 0} onClick={() => {navigate(`/quiz/${currentQuiz.id}/question/${parsedId - 1}`)}}>Prev</button>
			<div className='quiz-question' key={id}>
				<div className='quiz-question-description'>
					<p>{quizQuestion.questionText}</p>
				</div>
				<div className='answers-container'>
					{answers}
				</div>
			</div>
			<button disabled={parsedId + 1 > currentQuiz.attributes.questions.length} onClick={() => {navigate(`/quiz/${currentQuiz.id}/question/${parsedId + 1}`)}}>Next</button>
		</section>
	);
}

export default QuizQuestion;
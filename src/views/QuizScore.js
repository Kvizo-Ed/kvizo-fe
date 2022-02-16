import '../scss/QuizScore.scss';
import { Outlet, Link } from 'react-router-dom'

function QuizScore ({quiz, status}) {

	let questions = quiz.attributes.questions.length
	let counter = 0;
	let studentAnswers = Object.values(status)

	studentAnswers.forEach(answer => {
		if(answer.correctAnswer === answer.activeAnswer) {
			counter++
		}
	})

    return (
        <div className="quiz-score-container">
					<h1>Your score is a {Math.floor((counter / questions) * 100)}%</h1>
					<h1>That means you got {counter} out {questions} questions correct!</h1>
					<Link to={`review/1`}>
            <button className='btn' >Review Quiz?</button>
          </Link>
					<Outlet />
        </div>
    );
}

export default QuizScore;
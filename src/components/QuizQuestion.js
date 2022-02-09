import '../scss/QuizQuestion.scss';
import { RiCloseCircleFill } from 'react-icons/ri'

function quizQuestion({question, setPreviewOpen, content}) {

	function shuffle(array) {
		let currentIndex = array.length, randomIndex
		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex--
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
		}
		return array
	}

	let questionArr = Object.values(question)
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
			<h1 className='question-header'>Question {content.questions.length + 1}</h1>
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
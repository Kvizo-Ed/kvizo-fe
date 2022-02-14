import '../scss/QuizQuestion.scss'
import { useState } from 'react'
import { shuffle } from '../services/utils.js'
import { ActionCable } from 'react-actioncable-provider'
import { Link } from 'react-router-dom'

function QuizQuestion({ quiz }) {

    let [question, setQuestion] = useState('')

    const randomizeAnswers = (question) => {
        const answers = shuffle(question.possibleAnswers)
        return answers.map((element, index) => {
            return (
                <div className='answer' key={index}>
                            <label className='answer-label'>{ String.fromCharCode(index + 1 + 64)}</label>
                            <p>{element}</p>
                </div>
            )
        })
    }
    
    let randomizedAnswers = question.length ? randomizeAnswers(question) : randomizeAnswers({possibleAnswers: ['', '', '', '']})

    const handleReceived = (res) => {
        console.log(res)
        // See what this looks like
        // Set question to state, setQuestion(entire question, not just text)
    }

	return (
		<section className="quiz-question-container">
			<div className='quiz-question'>
				<div className='quiz-question-description'>
                    <ActionCable
                        channel={{ channel: 'ConversationsChannel' }}
                        onReceived={handleReceived}
                    />
					<p>{question.length ? question.questionText : 'Hang tight, the question is on its way!'}</p>
				</div>
				<div className='answers-container'>
					{randomizedAnswers}
				</div>
			</div>
		</section>
	);
}

export default QuizQuestion;
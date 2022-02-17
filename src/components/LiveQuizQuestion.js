import '../scss/QuizQuestion.scss'
import { useState } from 'react'
import { shuffle } from '../services/utils.js'
import { ActionCable } from 'react-actioncable-provider'
import { Link } from 'react-router-dom'

function QuizQuestion() {

    let [question, setQuestion] = useState({data: null})

    const randomizeAnswers = (answers) => {
        // const answers = shuffle(question.possibleAnswers)
        return answers.map((element, index) => {
            return (
                <div className='answer' key={index}>
                            <label className='answer-label'>{ String.fromCharCode(index + 1 + 64)}</label>
                            <p>{element}</p>
                </div>
            )
        })
    }
    
    // let randomizedAnswers = question.data ? randomizeAnswers(question.data.attributes.possible_answers) : randomizeAnswers({possibleAnswers: ['', '', '', '']})

    const handleReceived = (res) => {
        console.log(res)
        setQuestion(res)
        // See what this looks like
        // Set question to state, setQuestion(entire question, not just text)
    }

	return (
		<section className="quiz-question-container">
            {console.log("QUESTION", question.question)}
			<div className='quiz-question'>
				<div className='quiz-question-description'>
                    <ActionCable
                        channel={{ channel: 'QuestionsChannel' }}
                        onReceived={handleReceived}
                    />
					<p>{question.question ? question.question.data.attributes.question_text : 'Hang tight, the question is on its way!'}</p>
				</div>
				<div className='answers-container'>
					{question.question ? randomizeAnswers(question.question.data.attributes.possible_answers) : randomizeAnswers(['', '', '', ''])}
				</div>
			</div>
		</section>
	);
}

export default QuizQuestion;
import '../scss/QuizQuestion.scss'
import { useState } from 'react'
import { shuffle } from '../services/utils.js'
import { ActionCableConsumer } from 'react-actioncable-provider'

function QuizQuestion() {

    const [question, setQuestion] = useState(null)

    const randomizeAnswers = (possibleAnswers) => {
        const answers = shuffle(possibleAnswers)
        return answers.map((element, index) => {
            return (
                <div className='answer' key={index}>
                            <label className='answer-label'>{ String.fromCharCode(index + 1 + 64)}</label>
                            <p>{element}</p>
                </div>
            )
        })
    }
    
    async function handleReceived(res) {
        console.log(">>>> Received", res.question.data.attributes)
        await setQuestion(res.question.data.attributes)
    }

	return (
        <ActionCableConsumer
            channel={{ channel: 'QuestionsChannel' }}
            onReceived={handleReceived}
        >
            <section className="quiz-question-container">
                <div className='quiz-question'>
                    <div className='quiz-question-description'>
                        <p>{question ? question.question_text : 'Hang tight, the question is on its way!'}</p>
                    </div>
                    <div className='answers-container'>
                        {question ? randomizeAnswers(question.possible_answers) : randomizeAnswers(['', '', '', ''])}
                    </div>
                </div>
            </section>
        </ActionCableConsumer>
	);
}

export default QuizQuestion;
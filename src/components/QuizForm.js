import '../scss/QuizForm.scss';
import { useState } from 'react'

function QuizForm({ content, setContent }) {

    const [question, setQuestion] = useState({
        questionText: '',
        correctAnswer: '',
        possibleAnswerB: '',
        possibleAnswerC: '',
        possibleAnswerD: '',
    })

    const handleChange = (e) => {
        setQuestion({
            ...question,
            [e.target.name]: e.target.value
        })
    }

    const saveQuestion = (e) => {
        e.preventDefault()

        let newQuestion = {
            questionText: question.questionText,
            correctAnswer: question.correctAnswer,
            possibleAnswers: [question.correctAnswer, question.possibleAnswerB, question.possibleAnswerC, question.possibleAnswerD]
        }

        setContent({
            questions: [...content.questions, newQuestion]
        })

        setQuestion({
            questionText: '',
            correctAnswer: '',
            possibleAnswerB: '',
            possibleAnswerC: '',
            possibleAnswerD: '',
        })
    }

    return (
        <form className="create-quiz">
            <h1>Quiz Form</h1>
            <label >
                Question
                <input type="text" name="questionText" value={question.questionText} onChange={(e) => handleChange(e)} />
            </label>
            <label >
                Correct Answer
                <input type="text" name="correctAnswer" value={question.correctAnswer} onChange={(e) => handleChange(e)} />
            </label>
            <label >
                Incorrect Answer 1
                <input type="text" name="possibleAnswerB" value={question.possibleAnswerB} onChange={(e) => handleChange(e)} />
            </label>
            <label >
                Incorrect Answer 2
                <input type="text" name="possibleAnswerC" value={question.possibleAnswerC} onChange={(e) => handleChange(e)} />
            </label>
            <label >
                Incorrect Answer 3
                <input type="text" name="possibleAnswerD" value={question.possibleAnswerD} onChange={(e) => handleChange(e)} />
            </label>
            <button onClick={(e) => saveQuestion(e)}>Save Question</button>
            
        </form>
    );
}

export default QuizForm;

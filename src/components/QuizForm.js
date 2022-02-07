import '../scss/QuizForm.scss';
import { useEffect, useState, useCallback } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { RiCloseCircleFill } from 'react-icons/ri'
import Modal from 'react-modal'

Modal.setAppElement(document.getElementById('root'))

function QuizForm({ content, setContent }) {

    const [question, setQuestion] = useState({
        questionText: {text: '', isComplete: "pending"},
        correctAnswer: {text: '', isComplete: "pending"},
        possibleAnswerB: {text: '', isComplete: "pending"},
        possibleAnswerC: {text: '', isComplete: "pending"},
        possibleAnswerD: {text: '', isComplete: "pending"}
    })

    const [incompleteMessage, setIncompleteMessage] = useState('hide')

    const handleChange = (e) => {
        let complete = e.target.value ? 'complete' : 'pending'
        setQuestion({
            ...question,
            [e.target.name]: {text: e.target.value, isComplete: complete}
        })
    }

    const handleSave = (e) => {
        e.preventDefault()
        checkFields() ? saveQuestion() : markIncomplete()
    }

    const checkFields = useCallback(() => {
        const fields = Object.keys(question)
        return fields.every(field => question[field].isComplete === 'complete')
    }, [question])

    const markIncomplete = () => {
        let fields = Object.keys(question)
        let completeStatus = {}
        fields.forEach(field => {
            completeStatus[field] = (question[field].text) ? 
                {text: question[field].text, isComplete: 'complete'} : 
                {text: question[field].text, isComplete: 'incomplete'}
        })
        setQuestion(completeStatus)
        setIncompleteMessage('show')
    }

    const saveQuestion = (e) => {

        let newQuestion = {
            questionText: question.questionText.text,
            correctAnswer: question.correctAnswer.text,
            possibleAnswers: [question.correctAnswer.text, question.possibleAnswerB.text, question.possibleAnswerC.text, question.possibleAnswerD.text]
        }

        setContent({
            questions: [...content.questions, newQuestion]
        })

        setQuestion({
            questionText: {text: '', isComplete: "pending"},
            correctAnswer: {text: '', isComplete: "pending"},
            possibleAnswerB: {text: '', isComplete: "pending"},
            possibleAnswerC: {text: '', isComplete: "pending"},
            possibleAnswerD: {text: '', isComplete: "pending"}
        })

        setIncompleteMessage('hide')
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggleInfoModal = (e) => {
        e.preventDefault()
        setModalIsOpen(!modalIsOpen)
    }

    useEffect(() => {
        if (incompleteMessage === 'show') {
            let message = checkFields() ? 'hide' : 'show'
            setIncompleteMessage(message)
        }
    }, [checkFields, incompleteMessage])

    return (
        <form className="create-quiz">
            <div className="quiz-form-question">
                <h1 className="quiz-form-question-number">{content.questions.length + 1}.</h1>
                <label className="quiz-form-question-label">Question</label>
                <textarea className={`quiz-form-question-input ${question.questionText.isComplete}`} type="text" name="questionText" value={question.questionText.text} onChange={(e) => handleChange(e)} />
            </div>

            <div className="info-btn-container">
                <button onClick={(e) => toggleInfoModal(e)} className="info-btn"><FaInfoCircle /></button>
                <Modal isOpen={modalIsOpen} className="info-modal">
                    <div className="info-modal-content">
                        <button onClick={(e) => toggleInfoModal(e)} className="close-modal"><RiCloseCircleFill /></button>
                        <h3>Multiple choice answer options will be randomized</h3>
                    </div>
                </Modal>
            </div>

            <div className="quiz-form-answer-row">
                <div className="form-answer">
                    <label className="quiz-form-answer-label correct-label">Correct Answer</label>
                    <input className={`quiz-form-answer-input ${question.correctAnswer.isComplete}`} type="text" name="correctAnswer" value={question.correctAnswer.text} onChange={(e) => handleChange(e)} />
                </div>
                
                <div className="form-answer">
                    <label className="quiz-form-answer-label incorrect-label">Incorrect Answer 1</label>
                    <input className={`quiz-form-answer-input ${question.possibleAnswerB.isComplete}`} type="text" name="possibleAnswerB" value={question.possibleAnswerB.text} onChange={(e) => handleChange(e)} />
                </div>
            </div>

            <div className="quiz-form-answer-row">
                <div className="form-answer">    
                    <label className="quiz-form-answer-label incorrect-label">Incorrect Answer 2</label>
                    <input className={`quiz-form-answer-input ${question.possibleAnswerC.isComplete}`} type="text" name="possibleAnswerC" value={question.possibleAnswerC.text} onChange={(e) => handleChange(e)} />
                </div>

                <div className="form-answer">
                    <label className="quiz-form-answer-label incorrect-label">Incorrect Answer 3</label>
                    <input className={`quiz-form-answer-input ${question.possibleAnswerD.isComplete}`} type="text" name="possibleAnswerD" value={question.possibleAnswerD.text} onChange={(e) => handleChange(e)} />
                </div>
            </div>
            
            <button className="save-question-btn" onClick={(e) => handleSave(e)}>Save Question</button>
            <p className={incompleteMessage} >Please complete all fields</p>
            
        </form>
    );
}

export default QuizForm;

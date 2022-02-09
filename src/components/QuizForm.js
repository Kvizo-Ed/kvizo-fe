import '../scss/QuizForm.scss';
import { useEffect, useState, useCallback } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { RiCloseCircleFill } from 'react-icons/ri'
import QuizQuestion from '../components/QuizQuestion'
import Modal from 'react-modal'

Modal.setAppElement(document.getElementById('root'))

function QuizForm({ content, setContent }) {

    const [question, setQuestion] = useState({
        questionText: '',
        correctAnswer: '',
        possibleAnswerB: '',
        possibleAnswerC: '',
        possibleAnswerD: ''
    })

    const [incompleteMessage, setIncompleteMessage] = useState('hide')

    const handleChange = (e) => {
        setQuestion({
            ...question,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = (e) => {
        e.preventDefault()
        checkFields() ? saveQuestion() : setIncompleteMessage('show')
    }

    const checkFields = useCallback(() => {
        const fields = Object.keys(question)
        return fields.every(field => question[field].length)
    }, [question])

    const resetFields = () => {
        setQuestion({
            questionText: '',
            correctAnswer: '',
            possibleAnswerB: '',
            possibleAnswerC: '',
            possibleAnswerD: ''
        })

        setIncompleteMessage('hide')
    }

    const [previewOpen, setPreviewOpen] = useState(false)

    const previewQuiz = (e) => {
        e.preventDefault()
        setPreviewOpen(!previewOpen)
        // setPreview({
        //     ...quizHeader,
        //     ...quizContent
        // })
    }


    const saveQuestion = (e) => {
        let newQuestion = {
            questionText: question.questionText,
            correctAnswer: question.correctAnswer,
            possibleAnswers: [question.correctAnswer, question.possibleAnswerB, question.possibleAnswerC, question.possibleAnswerD]
        }

        setContent({
            questions: [...content.questions, newQuestion]
        })

        resetFields()
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggleInfoModal = (e) => {
        e.preventDefault()
        setModalIsOpen(!modalIsOpen)
    }

    useEffect(() => {
        checkFields() && setIncompleteMessage('hide')
    }, [checkFields])

    return (
        <form className="create-quiz">
            <div className="quiz-form-question">
                <h1 className="quiz-form-question-number">{content.questions.length + 1}.</h1>
                <label className="quiz-form-question-label">Question</label>
                <textarea className={`quiz-form-question-input ${incompleteMessage}-${question.questionText.length}`} type="text" name="questionText" value={question.questionText} onChange={(e) => handleChange(e)} />
            </div>

            <Modal isOpen={previewOpen} className="info-modal">
                <QuizQuestion question={question} setPreviewOpen={setPreviewOpen} />
            </Modal>

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
                    <input className={`quiz-form-answer-input ${incompleteMessage}-${question.correctAnswer.length}`} type="text" name="correctAnswer" value={question.correctAnswer} onChange={(e) => handleChange(e)} />
                </div>
                
                <div className="form-answer">
                    <label className="quiz-form-answer-label incorrect-label">Incorrect Answer 1</label>
                    <input className={`quiz-form-answer-input ${incompleteMessage}-${question.possibleAnswerB.length}`} type="text" name="possibleAnswerB" value={question.possibleAnswerB} onChange={(e) => handleChange(e)} />
                </div>
            </div>

            <div className="quiz-form-answer-row">
                <div className="form-answer">    
                    <label className="quiz-form-answer-label incorrect-label">Incorrect Answer 2</label>
                    <input className={`quiz-form-answer-input ${incompleteMessage}-${question.possibleAnswerC.length}`} type="text" name="possibleAnswerC" value={question.possibleAnswerC} onChange={(e) => handleChange(e)} />
                </div>

                <div className="form-answer">
                    <label className="quiz-form-answer-label incorrect-label">Incorrect Answer 3</label>
                    <input className={`quiz-form-answer-input ${incompleteMessage}-${question.possibleAnswerD.length}`} type="text" name="possibleAnswerD" value={question.possibleAnswerD} onChange={(e) => handleChange(e)} />
                </div>
            </div>
            
            <button onClick={previewQuiz}>Preview</button>
            <button className="save-question-btn" onClick={(e) => handleSave(e)}>Save Question</button>
            <p className={incompleteMessage} >Please complete all fields</p>
            
        </form>
    );
}

export default QuizForm;
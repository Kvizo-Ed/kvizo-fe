import '../scss/Quiz.scss';
import { useState, useEffect } from 'react'
import { getQuiz } from '../services/fetchAPIs'
import { useLocation, Outlet, Link, useNavigate, useParams } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'

function Quiz({ setCurrentQuiz, status, setStatus, changeStatus }) {
    
    const [quiz, setQuiz] = useState({})
    const [loading, setLoading] = useState(false)
    const [hideTestInfo, setHideTestInfo] = useState(false)
    const [questionsLength, setQuestionsLength] = useState(0)
    const [showSubmitBtn, setShowSubmitBtn] = useState(false)
    const [error, setError] = useState(false)

    let quizId = parseInt(useLocation().pathname.split('/')[2]);
    let navigate = useNavigate();
    let questionNumber = parseInt(useParams().id);

    useEffect(() => {
        fetchQuiz(quizId)
        changeStatus({})
    }, [])

    async function fetchQuiz() {
        let data = await getQuiz(quizId);
        if (data instanceof Error) {
            setError(true)
        } else {
            await setQuiz(data);
            await setCurrentQuiz(data)
            await setStatus(data)
            setQuestionsLength(data.attributes.questions.length)
            setLoading(true)
        }
    } 

    useEffect(() => {
        if(questionsLength === questionNumber) {
            setShowSubmitBtn(true)
        }
    })
    
    function submitQuiz() {
        navigate(`score`)
    }

    function changeQuestionDot(index) {
        if(index + 1 === questionNumber && status[index + 1].activeAnswer) {
            console.log(questionNumber)
            return 'question-dot current active'
        }

        if(status[index + 1].activeAnswer) {
            return 'question-dot active'
        }
        
        if(index + 1 === questionNumber) {
            return 'question-dot current'
        }
        return 'question-dot'
    }

    function handleDotClick(index) {
        navigate(`question/${index}`)
    }

    let questionTracker = Object.values(status).map((element, index) => {
        console.log(element)
        return (
            <div key={index + 1} className={changeQuestionDot(index)} onClick={(e) => handleDotClick(index + 1)} >{index + 1}</div>
        )
    })

    return (
        <>
            {error ? <ErrorMessage message="" /> :
                <div className="quiz-container">
                {loading ?
                    <div>
                        <h1 className='quiz-view-title'>{quiz.attributes.title}</h1>
                        <h1 className={hideTestInfo ? 'hidden' : 'quiz-view-info'}>Subject: {quiz.attributes.subject}</h1>
                        <h1 className={hideTestInfo ? 'hidden' : 'quiz-view-info'}>Topic: {quiz.attributes.topic}</h1>
                        <div className={hideTestInfo ? 'hidden' : 'quiz-view-btn-container'}>
                            <Link to={`question/1`} >
                                <button className={hideTestInfo ? 'hidden' : 'take-quiz btn'} onClick={(e) => setHideTestInfo(true)} >Take Quiz</button>
                            </Link>
                        </div>
                        <div className={!hideTestInfo ? 'hidden' : 'question-tracker'} >
                            {questionTracker}
                        </div>
                    </div>
                : null}
                <Outlet />
                <button className={!showSubmitBtn ? 'hidden' : 'submit btn'} onClick={submitQuiz}>Submit Quiz</button>
            </div>
            }
        </>
    );
}

export default Quiz;
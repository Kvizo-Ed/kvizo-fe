import '../scss/Quiz.scss';
import { useState, useEffect } from 'react'
import { getQuiz } from '../services/fetchAPIs'
import { useLocation, Outlet, Link, useNavigate } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'

function Quiz({ setCurrentQuiz, setStatus }) {
    
    const [quiz, setQuiz] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    let quizId = parseInt(useLocation().pathname.split('/')[2]);
    let navigate = useNavigate()

    async function fetchQuiz() {
        let data = await getQuiz(quizId);
        if (data instanceof Error) {
            setError(true)
        } else {
            await setQuiz(data);
            await setCurrentQuiz(data)
            setLoading(true)
            setStatus(data)
        }
    } 

    useEffect(() => {
        fetchQuiz(quizId)
    }, [])

    function submitQuiz() {
        navigate(`score`)
    }

    return (
        <>
            {error ? <ErrorMessage message="" /> :
                <div className="quiz-container">
                    {loading ?
                        <div>
                            <h1 className='quiz-view-title'>{quiz.attributes.title}</h1>
                            <h1 className='quiz-view-info'>Topic: {quiz.attributes.topic}</h1>
                            <h1 className='quiz-view-title'>Subject: {quiz.attributes.subject}</h1>
                            <Link to={`question/1`}>
                                <button>Take Quiz</button>
                            </Link>
                            <Outlet />
                        </div>
                    : <h1>Loading...</h1>}
                    <button onClick={submitQuiz}>Submit Quiz</button>
                </div>
            }
        </>
    );
}

export default Quiz;
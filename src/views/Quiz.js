import '../scss/Quiz.scss';
import { useState, useEffect } from 'react'
import { getQuiz } from '../services/fetchAPIs'
import { useLocation, Outlet, Link, useNavigate } from 'react-router-dom'

function Quiz({ setCurrentQuiz, setStatus }) {
    
    const [quiz, setQuiz] = useState({})
    const [loading, setLoading] = useState(false)

    let quizId = parseInt(useLocation().pathname.split('/')[2]);
    let navigate = useNavigate()

    async function fetchQuiz() {
        let data = await getQuiz(quizId);
        await setQuiz(data);
        await setCurrentQuiz(data)
        setLoading(true)
        setStatus(data)
    }

    useEffect(() => {
        fetchQuiz(quizId)
    }, [])

    function submitQuiz() {
        navigate(`score`)
    }

    return (
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
            : <h1>hello</h1>}
            <button onClick={submitQuiz}>Submit Quiz</button>
        </div>
    );
}

export default Quiz;
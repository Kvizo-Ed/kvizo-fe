import '../scss/Quiz.scss';
import { useState, useEffect } from 'react'
import { getQuiz } from '../services/fetchAPIs'
import { useLocation, Outlet, Link } from 'react-router-dom'
import QuizQuestion from '../components/QuizPreviewQuestion';

function Quiz({ setCurrentQuiz }) {
    
    const [quiz, setQuiz] = useState({})
    const [loading, setLoading] = useState(false)

    let quizId = parseInt(useLocation().pathname.split('/')[2]);

    async function fetchQuiz() {
        let data = await getQuiz(quizId);
        await setQuiz(data);
        await setCurrentQuiz(data)
        setLoading(true)
    }

    useEffect(() => {
        fetchQuiz(quizId)
    }, [])

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
                    <Link to={'admin'}>
                        <button>Administer Live Quiz</button>
                    </Link>
                    <Outlet />
                </div>
            : <h1>hello</h1>}
        </div>
    );
}

export default Quiz;
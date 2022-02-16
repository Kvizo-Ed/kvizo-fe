import '../scss/Quizzes.scss';
import { useEffect, useState } from 'react'
import { getQuizzes } from '../services/fetchAPIs'
import QuizList from '../components/QuizList'

function Quizzes() {
    const [allQuizzes, setAllQuizzes] = useState([])

    async function getAllQuizzes() {
        let quizzes = await getQuizzes()
        setAllQuizzes(quizzes)
    }

    useEffect(() => {
        getAllQuizzes()
    }, [])

    return (
        <div className="quiz-list">
            <QuizList quizzes={allQuizzes}/>
        </div>
    )
}


export default Quizzes;
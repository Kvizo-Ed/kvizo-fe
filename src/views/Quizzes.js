import '../scss/Quizzes.scss';
import { useEffect, useState } from 'react'
import { getQuizzes } from '../services/fetchAPIs'
import QuizList from '../components/QuizList'
import ErrorMessage from '../components/ErrorMessage'

function Quizzes() {
    const [allQuizzes, setAllQuizzes] = useState([])
    const [error, setError] = useState(false)

    async function getAllQuizzes() {
        let quizzes = await getQuizzes()
        if (quizzes instanceof Error) {
            setError(true)
        } else {
            setAllQuizzes(filteredQuizzes(quizzes))
            setError(false)
        }
    }

    function filteredQuizzes(quiz) {
        return quiz.filter(element => {
            if(element.attributes.questions.length > 0) {
                return element
            }
        })
    }

    useEffect(() => {
        getAllQuizzes()
    }, [])

    return (
        <div className="quizzes">
            {error ? <ErrorMessage message="" /> : <QuizList quizzes={allQuizzes}/>}
        </div>
    )
}


export default Quizzes;
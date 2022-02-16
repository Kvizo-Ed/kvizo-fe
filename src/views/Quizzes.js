import '../scss/Quizzes.scss';
import { useEffect, useState } from 'react'
import { getQuizzes } from '../services/fetchAPIs'
import QuizList from '../components/QuizList'

function Quizzes() {
    const [allQuizzes, setAllQuizzes] = useState([])

    async function getAllQuizzes() {
        let quizzes = await getQuizzes()
        setAllQuizzes(filteredQuizzes(quizzes))
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
            <QuizList quizzes={allQuizzes}/>
        </div>
    )
}


export default Quizzes;
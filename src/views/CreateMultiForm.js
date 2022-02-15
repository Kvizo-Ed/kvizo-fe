import '../scss/CreateMultiForm.scss';
import multipleChoice from '../assets/multiple-choice.png';
import bingo from '../assets/bingo.png';
import QuizFormHeaderInfo from '../components/QuizFormHeaderInfo'
import { useEffect, useState, useCallback } from 'react'
import { postNewQuiz, patchQuizQuestions } from '../services/fetchAPIs'
import { useNavigate, Routes, Route } from 'react-router-dom'
import QuizForm from '../components/QuizForm'
import BingoForm from '../components/BingoForm'
import { useLocation } from 'react-router-dom'
import { getQuizId } from '../services/utils.js'
import ErrorMessage from '../components/ErrorMessage'


function CreateMultiForm() {
    
    const [quizHeader, setQuizHeader] = useState({
        user_id: '1',
        subject: '',
        topic: '',
        grade: '0',
        title: '',
        quiz_type: 'multi'
    })
    
    const [quizContent, setQuizContent] = useState({
        questions: []
    })

    const [headerDisabled, setHeaderDisabled] = useState('')
    const [error, setError] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    async function createNewQuiz(e, type) {
        e.preventDefault()
        let id = await postNewQuiz(quizHeader)
        if (id instanceof Error) {
            setError(true)
        } else {
            setHeaderDisabled('disabled')
            setError(false)
            navigate(`${type}/${id}`)
        }
    }

    const addQuestion = useCallback(async (id) => {
        let status = await patchQuizQuestions({questions: [quizContent.questions[quizContent.questions.length - 1]]}, id)
        if (status instanceof Error) {
            setError(true)
            let questionList = quizContent.questions
            questionList.pop()
            setQuizContent({questions: questionList})
        } else {
            setError(false)
        }
    }, [quizContent.questions]) 

    useEffect(() => {
        let id = getQuizId(location.pathname)
        id === "*" ? setHeaderDisabled('') : 
            quizContent.questions.length && addQuestion(id)
    }, [quizContent, location.pathname, addQuestion])

    return (
        <div className="create-multi-quiz">

            <QuizFormHeaderInfo header={quizHeader} setHeader={setQuizHeader} disabled={headerDisabled}/>

            <Routes>
                <Route path="/*" element=
                    {
                        <div>
                            <button onClick={(e, type) => createNewQuiz(e, "multi")}>
                                Create! 
                                <img src={multipleChoice} alt="multiple-choice quiz" />
                            </button>
                            <button onClick={(e, type) => createNewQuiz(e, "bingo")}>
                                Create! 
                                <img src={bingo} alt="multiple-choice quiz" />
                            </button>
                            {error && <ErrorMessage />}
                        </div>
                    } />
                <Route path="/multi/:id" element=
                    {
                        <>
                            <QuizForm content={quizContent} setContent={setQuizContent} />
                            {error && <ErrorMessage />}
                        </>
                    } />
                <Route path="/bingo" element={<BingoForm />} />
            </Routes>
            
        </div>
    );
}

export default CreateMultiForm;
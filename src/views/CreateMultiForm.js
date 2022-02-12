import '../scss/CreateMultiForm.scss';
import multipleChoice from '../assets/multiple-choice.png';
import bingo from '../assets/bingo.png';
import QuizFormHeaderInfo from '../components/QuizFormHeaderInfo'
import { useEffect, useState } from 'react'
import { postNewQuiz, patchQuizQuestions } from '../services/fetchAPIs'
import { useNavigate, Routes, Route } from 'react-router-dom'
import QuizForm from '../components/QuizForm'
import BingoForm from '../components/BingoForm'
import { useLocation } from 'react-router-dom'
import { getQuizId } from '../services/utils.js'


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

    const location = useLocation()
    const navigate = useNavigate()

    async function createNewQuiz(e, type) {
        e.preventDefault()
        setHeaderDisabled('disabled')
        let id = await postNewQuiz(quizHeader)
        navigate(`${type}/${id}`)
    }

    useEffect(() => {
        let id = getQuizId(location.pathname)
        console.log(">>Content about to Patch", quizContent)
        patchQuizQuestions({questions: [quizContent.questions[quizContent.questions.length - 1]]}, id)
    }, [quizContent, location.pathname])

    return (
        <div className="create-multi-quiz">

            <QuizFormHeaderInfo header={quizHeader} setHeader={setQuizHeader} disabled={headerDisabled}/>

            <Routes>
                <Route path="/*" element=
                    {<div>
                        <button onClick={(e, type) => createNewQuiz(e, "multi")}>
                            Create! 
                            <img src={multipleChoice} alt="multiple-choice quiz" />
                        </button>
                        <button onClick={(e, type) => createNewQuiz(e, "bingo")}>
                            Create! 
                            <img src={bingo} alt="multiple-choice quiz" />
                        </button>
                    </div>} />
                <Route path="/multi/:id" element={<QuizForm content={quizContent} setContent={setQuizContent} />} />
                <Route path="/bingo" element={<BingoForm />} />
            </Routes>
            
        </div>
    );
}

export default CreateMultiForm;
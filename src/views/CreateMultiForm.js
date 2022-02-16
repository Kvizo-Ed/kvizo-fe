import '../scss/CreateMultiForm.scss';
import multipleChoice from '../assets/multiple-choice.png';
import bingo from '../assets/bingo.png';
import QuizFormHeaderInfo from '../components/QuizFormHeaderInfo'
import { useEffect, useState } from 'react'
import { postNewQuiz, patchQuizQuestions } from '../services/fetchAPIs'
import { useNavigate, Routes, Route, useParams } from 'react-router-dom'
import QuizForm from '../components/QuizForm'
import BingoForm from '../components/BingoForm'
import { useLocation, Link } from 'react-router-dom'
import { getQuizId } from '../services/utils.js'
import { RiContactsBookLine } from 'react-icons/ri';


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

    let quizId = Object.values(useParams())[0].split('/')[1]


    useEffect(() => {
        let id = getQuizId(location.pathname)
        console.log(">>Content about to Patch", quizContent)
        patchQuizQuestions({questions: [quizContent.questions[quizContent.questions.length - 1]]}, id)
    }, [quizContent, location.pathname])

    return (
        <div className="create-multi-quiz">
            <QuizFormHeaderInfo header={quizHeader} setHeader={setQuizHeader} disabled={headerDisabled}/>
            <Routes>
                <Route path="/*" element={<button className='create btn' onClick={(e, type) => createNewQuiz(e, "multi")}>Create Quiz!</button>}/>
                <Route path="/multi/:id" element={<QuizForm quizHeader={quizHeader} content={quizContent} setContent={setQuizContent} />} />
            </Routes>
            {quizContent.questions.length ? 
            <Link to={`/quiz/${quizId}`} >
                <button className='btn'>Finish Creating Quiz</button>
            </Link>
            : null}   
        </div>
    );
}

export default CreateMultiForm;
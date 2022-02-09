import '../scss/CreateMultiForm.scss';
import QuizFormHeaderInfo from '../components/QuizFormHeaderInfo'
import { useState } from 'react'
import { postNewQuiz, patchQuizQuestions } from '../services/fetchAPIs'
import { useNavigate, Routes, Route } from 'react-router-dom'

// When we get to multiple quiz/game types, we might consider separating the forms into their own components and including buttons to navigate to them:
// import { NavLink } from 'react-router-dom'
import QuizForm from '../components/QuizForm'
// import BingoForm from './BingoForm'

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

    const navigate = useNavigate()

    async function createNewQuiz(e) {
        e.preventDefault()
        navigate("multi")
        let newQuizId = await postNewQuiz(quizHeader)
        console.log('>>>>', newQuizId)
    }

    return (
        <div className="create-multi-quiz">

            <QuizFormHeaderInfo header={quizHeader} setHeader={setQuizHeader} />

            <Routes>
                <Route path="/*" element={<button onClick={createNewQuiz}>Create multi/TF quiz</button>}/>
                <Route path="/multi" element={<QuizForm content={quizContent} setContent={setQuizContent}/>} />
            </Routes>
            

        </div>
    );
}

export default CreateMultiForm;

/* ROUTES
Header - always shows = url: /create/*
-- only editable until they hit the Create button

Create buttons - url: create/*
-- disappear when they select one
-- changes url to whatever they select

QuizForm = /create/multi
-- replaces Create buttons
*/

/* FETCH ORDER OF EVENTS
Create button click - 
-- POST new quiz
-- -- retrieve quiz id from response
-- update url to /create/:type/:id
-- new route updates content
*/
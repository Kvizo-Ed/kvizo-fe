import '../scss/CreateMultiForm.scss';
import QuizFormHeaderInfo from '../components/QuizFormHeaderInfo'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// When we get to multiple quiz/game types, we might consider separating the forms into their own components and including buttons to navigate to them:
import { NavLink } from 'react-router-dom'
import QuizForm from '../components/QuizForm'
// import BingoForm from './BingoForm'

// mockData to be deleted when we have actual API calls working:
import { createNewQuiz } from '../mockData.js'

function CreateMultiForm() {

    const [quizHeader, setQuizHeader] = useState({
        id: 0,
        subject: '',
        topic: '',
        gradeLevel: 'K',
        title: ''
    })

    return (
        <div className="create-multi-quiz">
            <QuizFormHeaderInfo header={quizHeader} setHeader={setQuizHeader}/>

            <Routes>
                <Route path="/*" element={<NavLink to="/create/quiz/*" element={<QuizForm />} onClick={() => createNewQuiz(quizHeader)}>Create Quiz and Add Content</NavLink>} />
                <Route path="/quiz/*" element={<QuizForm id={quizHeader.id}/>} />
            </Routes>

        </div>
    );
}

export default CreateMultiForm;

/*
subject
topic
grade level
title

questionText
correct answer
possible answers (x3)
*/
import '../scss/CreateMultiForm.scss';
import QuizFormHeaderInfo from '../components/QuizFormHeaderInfo'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

// When we get to multiple quiz/game types, we might consider separating the forms into their own components and including buttons to navigate to them:
// import { NavLink } from 'react-router-dom'
import QuizForm from '../components/QuizForm'
// import BingoForm from './BingoForm'

function CreateMultiForm() {

    const [quizHeader, setQuizHeader] = useState({
        user_id: '1',
        subject: '',
        topic: '',
        gradeLevel: '0',
        title: ''
    })

    const [quizContent, setQuizContent] = useState({
        questions: []
    })

    return (
        <div className="create-multi-quiz">

            <QuizFormHeaderInfo header={quizHeader} setHeader={setQuizHeader}/>

            <QuizForm content={quizContent} setContent={setQuizContent}/>

        </div>
    );
}

export default CreateMultiForm;
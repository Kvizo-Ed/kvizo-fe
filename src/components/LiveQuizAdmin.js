import { ActionCableConsumer } from 'react-actioncable-provider';
import '../scss/LiveQuizAdmin.scss';
import { postLiveQuestion } from '../services/fetchAPIs.js'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getQuiz } from '../services/fetchAPIs'
import ErrorMessage from './ErrorMessage.js'

function LiveQuizAdmin() {

    const [quiz, setQuiz] = useState({})
    const [questions, setQuestions] = useState([])
    const [error, setError] = useState(false)

    let quizId = parseInt(useLocation().pathname.split('/')[2]);

    async function fetchQuiz() {
        let data = await getQuiz(quizId);
        if (data instanceof Error) {
            setError(true)
        } else {
            await setQuiz(data)
            await setQuestions(data.attributes.questions)
        }
    } 
    
    useEffect(() => {
        fetchQuiz(quizId)
    }, [])

    const handleClick = (e, question) => {
        e.preventDefault()
        console.log("Question", question)
        console.log("SENDING: ", {questionID: question.questionId})

        postLiveQuestion({questionID: question.questionId})
    }

    const questionButtons = questions.map((question, i) => {
        return (
            <div key={i}>
                <button onClick={(e) => handleClick(e, question)} >{question.questionText}</button>
                {/* <p>{question.possibleAnswers[0]}</p>
                <p>{question.possibleAnswers[1]}</p>
                <p>{question.possibleAnswers[2]}</p>
                <p>{question.possibleAnswers[3]}</p> */}
            </div>
            )
    })

    const handleReceived = (message) => {
        console.log(message)
    }

    return (
        <ActionCableConsumer 
            channel="ErrorMessagesChannel"
            onConnected={() => console.log("connected")}
            onDisconnected={() => console.log("DISconnected")}
            onRejected={() => console.log("rejected")}
            onReceived={handleReceived}
        >
            <form className="admin">
                {error && <ErrorMessage message="" />}
                {questions.length ? questionButtons : <p>Loading...</p>}
            </form>
        </ActionCableConsumer>
    );
}

export default LiveQuizAdmin;
import { ActionCableConsumer } from 'react-actioncable-provider';
import '../scss/LiveQuizAdmin.scss';
import { postLiveQuestion } from '../services/fetchAPIs.js'

function LiveQuizAdmin({ quiz }) {

    console.log('quizzy quiz', quiz.attributes.questions)

    const handleClick = (e, question) => {
        e.preventDefault()
        console.log(question)

        postLiveQuestion(question)
    }

    const questions = quiz.attributes.questions.map((question, i) => {
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
            channel="ConversationsChannel"
            onConnected={() => console.log("connected")}
            onDisconnected={() => console.log("DISconnected")}
            onRejected={() => console.log("rejected")}
            onReceived={handleReceived}
        >
            <form className="admin">
                {questions}
            </form>
        </ActionCableConsumer>
    );
}

export default LiveQuizAdmin;
import '../scss/LiveQuizAdmin.scss';
import { postLiveQuestion } from '../services/fetchAPIs.js'

function LiveQuizAdmin({ quiz }) {

    console.log('quizzy quiz', quiz.attributes.questions)

    const handleClick = (e, question) => {
        e.preventDefault()
        console.log(question)

        postLiveQuestion({questionID: 1})
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

    return (
        <form className="admin">
            {questions}
        </form>
    );
}

export default LiveQuizAdmin;
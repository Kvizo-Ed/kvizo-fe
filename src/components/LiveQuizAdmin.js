import '../scss/LiveQuizAdmin.scss';

function LiveQuizAdmin({ quiz }) {

    console.log('quizzy quiz', quiz.attributes.questions)

    const questions = quiz.attributes.questions.map(question => {
        return (
            <div>
                <h3>{question.questionText}</h3>
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
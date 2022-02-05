import '../scss/QuizForm.scss';
import { setParams, useEffect } from 'react-router-dom'

function QuizForm() {

    useEffect(() => {
        setParams()
    })

    return (
        <form className="create-quiz">
            <h1>Quiz Form</h1>
            <label >
                Question
                <input type="text" name="questionText" />
            </label>
            <label >
                Correct Answer
                <input type="text" name="correctAnswer" />
            </label>
            <label >
                Incorrect Answer 1
                <input type="text" name="incorrectAnswer" />
            </label>
            <label >
            Incorrect Answer 2
                <input type="text" name="incorrectAnswer" />
            </label>
            <label >
            Incorrect Answer 3
                <input type="text" name="incorrectAnswer" />
            </label>
            <button>+ Add Question</button>
        </form>
    );
}

export default QuizForm;

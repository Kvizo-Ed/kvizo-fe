import '../scss/CreateMultiForm.scss';
import QuizFormHeaderInfo from '../components/QuizFormHeaderInfo'

function CreateMultiForm() {

    return (
        <form className="create-multi-quiz">
            <QuizFormHeaderInfo />
           
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
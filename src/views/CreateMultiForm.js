import '../scss/CreateMultiForm.scss';

function CreateMultiForm() {

    const grades = []
    for (let i = 1; i < 13; i++) {
        grades.push(
            <option value={i}>{i}</option>
        )
    }
 
    return (
        <form className="create-multi-quiz">
            <label >
                Subject
                <input type="text" name="subject" />
            </label>
            <label >
                Topic
                <input type="text" name="topic" />
            </label>
            <label>
                Grade level
                <select>
                    <option value="k" >K</option>
                    {grades}   
                </select>
            </label>
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
import '../scss/QuizFormHeaderInfo.scss';

function QuizFormHeaderInfo() {

    const grades = [<option value="k">K</option>]
    for (let i = 1; i < 13; i++) {
        grades.push(
            <option value={i}>{i}</option>
        )
    }
 
    return (
        <form className="create-quiz-header">

            <label >
                Subject
                <input type="text" name="subject" placeholder="e.g. Math"/>
            </label>
            <label >
                Topic
                <input type="text" name="topic" placeholder="e.g. Addition"/>
            </label>
            <label>
                Grade level
                <select>
                    {grades}   
                </select>
            </label>

        </form>
    );
}

export default QuizFormHeaderInfo;

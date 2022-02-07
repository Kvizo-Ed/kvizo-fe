import '../scss/QuizFormHeaderInfo.scss';

function QuizFormHeaderInfo({ header, setHeader, saveNewQuiz }) {

    const grades = [<option key="0" value="0">K</option>]
    for (let i = 1; i < 13; i++) {
        grades.push(
            <option key={i} value={i}>{i}</option>
        )
    }

    const handleChange = (e) => {
        setHeader({
            ...header,
            [e.target.name]: e.target.value
        })
    }
 
    return (
        <form className="create-new-quiz">
            <div className="create-quiz-header">
                <label className="quiz-form-header-field">
                    Subject
                    <input className="quiz-form-header-input" type="text" name="subject" placeholder="e.g. Math" onChange={(e) => handleChange(e)} />
                </label>
                <label className="quiz-form-header-field">
                    Topic
                    <input className="quiz-form-header-input" type="text" name="topic" placeholder="e.g. Addition" onChange={(e) => handleChange(e)} />
                </label>
                <label  className="quiz-form-header-field">
                    Grade level
                    <select className="quiz-form-header-input" name="grade" onChange={(e) => handleChange(e)} >
                        {grades}   
                    </select>
                </label>
            </div>

            <label className="quiz-form-title-field">
                <input className="quiz-form-title-input" type="text" name="title" placeholder="Quiz Title" onChange={(e) => handleChange(e)} />
            </label>

            <button onClick={(e) => saveNewQuiz(e)}>Save</button>

        </form>
    );
}

export default QuizFormHeaderInfo;

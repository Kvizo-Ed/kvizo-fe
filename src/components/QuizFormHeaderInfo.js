import '../scss/QuizFormHeaderInfo.scss';

function QuizFormHeaderInfo({ header, setHeader }) {

    const grades = [<option key="0" value='0'>K</option>]
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
        <form className="create-quiz-header">

            <label >
                Subject
                <input type="text" name="subject" placeholder="e.g. Math" onChange={(e) => handleChange(e)} />
            </label>
            <label >
                Topic
                <input type="text" name="topic" placeholder="e.g. Addition" onChange={(e) => handleChange(e)} />
            </label>
            <label>
                Grade level
                <select name="gradeLevel" onChange={(e) => handleChange(e)} >
                    {grades}   
                </select>
            </label>
            <label >
                Title
                <input type="text" name="title" placeholder="e.g. Addition Quiz" onChange={(e) => handleChange(e)} />
            </label>

        </form>
    );
}

export default QuizFormHeaderInfo;

import '../scss/QuizFormHeaderInfo.scss';
import { useState } from 'react'

function QuizFormHeaderInfo({ header, setHeader }) {

    const grades = [<option key="k" value="k">K</option>]
    for (let i = 1; i < 13; i++) {
        grades.push(
            <option key={i} value={i}>{i}</option>
        )
    }

    // const [quizHeader, setQuizHeader] = useState({
    //     subject: '',
    //     topic: '',
    //     gradeLevel: '',
    //     title: ''
    // })
 
    return (
        <form className="create-quiz-header">

            <label >
                Subject
                <input type="text" name="subject" placeholder="e.g. Math" onChange={(e) => setHeader({...header, subject: e.target.value})} />
            </label>
            <label >
                Topic
                <input type="text" name="topic" placeholder="e.g. Addition" onChange={(e) => setHeader({...header, topic: e.target.value})} />
            </label>
            <label>
                Grade level
                <select onChange={(e) => setHeader({...header, gradeLevel: e.target.value})} >
                    {grades}   
                </select>
            </label>
            <label >
                Title
                <input type="text" name="title" placeholder="e.g. Addition Quiz" onChange={(e) => setHeader({...header, title: e.target.value})} />
            </label>

        </form>
    );
}

export default QuizFormHeaderInfo;

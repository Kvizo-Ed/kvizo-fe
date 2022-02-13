import '../scss/QuizTitle.scss';
import { Link } from 'react-router-dom'

function QuizTitle({ subject, topic, grade, title, id}) {

    let gradeLevel = grade === 0 ? 'K' : grade

	return (
        <div className="quiz-title">
            <Link to={`/quiz/${id}`} className="quiz-link"><h3 className='title'>{title}</h3></Link>
            <p className='details'>Subject: {subject} Topic: {topic} Grade Level: {gradeLevel}</p>
		</div>
	);
}

export default QuizTitle;
import '../scss/QuizTitle.scss';
import { Link } from 'react-router-dom'

function QuizTitle({ subject, topic, grade, title, id}) {

    let gradeLevel = grade === 0 ? 'K' : grade

	return (
        <Link to={`/quiz/${id}`} className="quiz-link">
            <div className="quiz-title">
                <h3 className='title'>{title}</h3>
                <p className='details'>Subject: {subject}</p>
                <p className='details'>Topic: {topic}</p>
                <p className='details'>Grade Level: {gradeLevel}</p>
		    </div>
        </Link>
	);
}

export default QuizTitle;
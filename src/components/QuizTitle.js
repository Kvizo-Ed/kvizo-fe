import '../scss/QuizTitle.scss';

function QuizTitle({ subject, topic, grade, title}) {

    let gradeLevel = grade === 0 ? 'K' : grade

	return (
        <div className="quiz-title">
            <h3 className='title'>{title}</h3>
            <p className='details'>Subject: {subject} Topic: {topic} Grade Level: {gradeLevel}</p>
		</div>
	);
}

export default QuizTitle;
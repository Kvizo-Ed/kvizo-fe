import { useState, useEffect } from 'react';
import '../scss/QuizList.scss';
import QuizTitle from './QuizTitle';

function QuizList(quizzes) {

    const [quizTitles, setQuizTitles] = useState(<p>Loading...</p>)

    useEffect(() => {
        if (quizzes.quizzes.length) {
            const quizList = quizzes.quizzes.map((quiz, i) => {
                return <QuizTitle 
                    key={i}
                    subject={quiz.attributes.subject}
                    topic={quiz.attributes.topic}
                    grade={quiz.attributes.grade}
                    title={quiz.attributes.title}
                    id={quiz.id}
                />})

            setQuizTitles(quizList)
        }
    }, [quizzes])

	return (
		<div className="quiz-list">
            {quizTitles}
		</div>
	);
}

export default QuizList;
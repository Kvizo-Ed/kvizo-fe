import { isElementType } from '@testing-library/user-event/dist/utils';
import { useState, useEffect } from 'react';
import '../scss/QuizList.scss';
import QuizTitle from './QuizTitle';

function QuizList(quizzes) {

    const [quizTitles, setQuizTitles] = useState([])
    const [loading, setLoading] = useState(true)
    const [topicsStatus, changeTopicsStatus] = useState({
        activeTopic: null,
        topics: []
    })
    const [filteredTopics, setFilteredTopics] = useState([])

    useEffect(async () => {
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

                await setQuizTitles(quizList)
                setLoading(false)
        }
    }, [quizzes])

    let topics = {}

    quizTitles.forEach(element => {
        if(!topics[element.props.subject]) {
            topics[element.props.subject] = element.props.subject
        }
    })

    let topicsArr = Object.values(topics)

    function filterGrid(element) {
        let filteredQuizzes = quizTitles.filter(quiz => {
            if(quiz.props.subject === element) {
                return quiz
            }
        })
        setFilteredTopics(filteredQuizzes)
    }

    const toggleActive = (element) => {
        if(topicsStatus.activeTopic === element) {
            changeTopicsStatus(topicsStatus => ({ ...topicsStatus, activeTopic: null }))
            setFilteredTopics([])
        } else {
            changeTopicsStatus(topicsStatus => ({ ...topicsStatus, activeTopic: element }))
            filterGrid(element)
        }
	}

	const toggleActiveStyle = (index) => {
        if(topicsStatus.topics[index] === topicsStatus.activeTopic) {
                return `btn active`
        } else {
                return `btn inactive`
        }
    }

    function setTopicsStatus(topics) {
        topics.forEach((topic, index) => {
            changeTopicsStatus(topicStatus => ({ ...topicsStatus, topics: [...topics, topic] }))
        })
    }

    useEffect(() => {
        setTopicsStatus(topicsArr)
    }, [loading])

    let subjectButtons = topicsArr.map((element, index) => {
        return <button key={index} className={toggleActiveStyle(index)} onClick={(e) => toggleActive(element)} >{element}</button>
    })

	return (
		<div className="quiz-list">
            {loading ? <p>Loading...</p> :
            <div className='quiz-list-wrapper' >
                {filteredTopics.length ? 
                <div className='clear-wrapper'>
                    <button className='clear btn' onClick={(e) => setFilteredTopics([])}>Clear Topics Filter</button>
                </div>
                : <h1>Select by Topic</h1>}
                <div className='button-container'>
                    {subjectButtons}
                </div>
                <div className='quiz-list-grid' >
                    {filteredTopics.length ? filteredTopics
                    : quizTitles
                    }
                </div>
            </div>
            }
		</div>
	);
}

export default QuizList;
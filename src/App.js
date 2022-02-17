import './scss/App.scss';
import Home from './views/Home';
import Quizzes from './views/Quizzes'
import Quiz from './views/Quiz'
import Nav from './views/Nav'
import { Routes, Route } from 'react-router-dom'
import CreateMultiForm from './views/CreateMultiForm'
import QuizQuestion from './components/QuizQuestion'
import QuizScore from './views/QuizScore'
import QuizReview from './components/QuizReview'
import { useEffect, useState } from 'react'
import LiveQuizAdmin from './components/LiveQuizAdmin'
import LiveQuizQuestion from './components/LiveQuizQuestion'
import ErrorMessage from './components/ErrorMessage'

function App() {

  const [currentQuiz, setCurrentQuiz] = useState({})
  const [status, changeStatus] = useState({})

  function setStatus(quiz) {
    quiz.attributes.questions.forEach((question, index) => {
        changeStatus(status => ({...status, [index + 1]: {activeAnswer: null, correctAnswer: question.correctAnswer, answers: question.possibleAnswers}}))
    })
  }

  useEffect(() => {
    changeStatus({})
  }, [])

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/create/*" element={ <CreateMultiForm />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:id" element={<Quiz setCurrentQuiz={setCurrentQuiz} status={status} setStatus={setStatus} changeStatus={changeStatus}/>}>
          <Route path="live/admin" element={<LiveQuizAdmin />} />
          <Route path="live/question" element={<LiveQuizQuestion />} />
          <Route path="question/:id" element={<QuizQuestion currentQuiz={currentQuiz} setCurrentQuiz={setCurrentQuiz} changeStatus={changeStatus} status={status} setStatus={setStatus} />} />
        </Route>
        <Route path="quiz/:id/score" element={<QuizScore quiz={currentQuiz} status={status} />} >
          <Route path="review/:id" element={<QuizReview currentQuiz={currentQuiz} status={status} />}/>
        </Route>
        <Route path="/*" element={<ErrorMessage message="Page not found" />} />
      </Routes>
    </div>
  );
}

export default App;

import './scss/App.scss';
import Home from './views/Home';
import Quizzes from './views/Quizzes'
import Quiz from './views/Quiz'
import Nav from './views/Nav'
import { Routes, Route } from 'react-router-dom'
import CreateMultiForm from './views/CreateMultiForm'
import QuizQuestion from './components/QuizQuestion'
import { useState } from 'react'
import LiveQuizAdmin from './components/LiveQuizAdmin'

function App() {

  const [currentQuiz, setCurrentQuiz] = useState({})

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/create/*" element={ <CreateMultiForm />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:id" element={<Quiz setCurrentQuiz={setCurrentQuiz} />}>
          <Route path="question/:id" element={<QuizQuestion quiz={currentQuiz}/>} />
          <Route path="admin" element={<LiveQuizAdmin quiz={currentQuiz} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

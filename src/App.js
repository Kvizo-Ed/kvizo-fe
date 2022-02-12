import './scss/App.scss';
import Home from './views/Home';
import Quizzes from './views/Quizzes'
import Nav from './views/Nav'
import { Routes, Route } from 'react-router-dom'
import CreateMultiForm from './views/CreateMultiForm'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/create/*" element={ <CreateMultiForm />} />
        <Route path="/quizzes" element={<Quizzes />} />
      </Routes>
    </div>
  );
}

export default App;

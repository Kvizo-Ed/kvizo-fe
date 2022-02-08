import './scss/App.scss';
import Home from './views/Home';
// import Nav from './views/Nav'
import { Route, Routes } from 'react-router-dom'
import CreateMultiForm from './views/CreateMultiForm'

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/create/*" element={ <CreateMultiForm />} />
      </Routes>
    </div>
  );
}

export default App;

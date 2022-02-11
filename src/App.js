import './scss/App.scss';
import Home from './views/Home';
import Nav from './views/Nav'
import { Routes, Route } from 'react-router-dom'
import CreateMultiForm from './views/CreateMultiForm'

import ConversationsList from './ConversationsList';

function App() {
  return (
    <div className="App">
      {/* <Nav />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/create/*" element={ <CreateMultiForm />} />
      </Routes> */}

      <ConversationsList /> 

    </div>
  );
}

export default App;

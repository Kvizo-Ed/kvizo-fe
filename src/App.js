import './scss/App.scss';
import Home from './views/Home';
// import Nav from './views/Nav'
import { Route } from 'react-router-dom'
import CreateMultiForm from './views/CreateMultiForm'

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
        <Route path="/" element={ <Home /> } />
        <Route path="/create/*" element={ <CreateMultiForm />} />
    </div>
  );
}

export default App;

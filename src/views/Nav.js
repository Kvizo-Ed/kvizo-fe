import '../scss/Nav.scss';
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav">
      <h1>Kvizo</h1>
      <NavLink to="/" className="home-link">Home</NavLink>
      <NavLink to="/create" className="create">Create Quiz</NavLink>
      <NavLink to="/quizzes" className="quizzes">Quizzes</NavLink>
      <NavLink to="/about" className="about">About us</NavLink>
    </div>
  );
}

export default Nav;
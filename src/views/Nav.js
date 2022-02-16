import '../scss/Nav.scss';
import { NavLink } from 'react-router-dom'
import logo from '../assets/kvizo-logo.png'

function Nav() {
  return (
    <div className="navbar">
        <img className="logo" src={logo} alt="kvizo logo"/>
        <div className='navlink-container'>
          <NavLink to="/" className="navbar-link btn">Home</NavLink>
          <NavLink to="/create/*" className="navbar-link btn">Create</NavLink>
          <NavLink to="/quizzes" className="navbar-link btn">Quizzes</NavLink>
          <NavLink to="/about" className="navbar-link btn">About</NavLink>
        </div>
    </div>
  );
}

export default Nav;
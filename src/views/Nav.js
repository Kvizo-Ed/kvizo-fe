import '../scss/Nav.scss';
import { NavLink } from 'react-router-dom'
import logo from '../assets/kvizo-logo.png'
import { RiUserFill, RiSettings3Fill } from 'react-icons/ri'

function Nav() {
  return (
    <div className="navbar">
        <img className="logo" src={logo} alt="kvizo logo"/>
        <div className='navlink-container'>
          <NavLink to="/" className="navbar-link">Home</NavLink>
          <NavLink to="/create/*" className="navbar-link">Create</NavLink>
          <NavLink to="/quizzes" className="navbar-link">Quizzes</NavLink>
          <NavLink to="/about" className="navbar-link">About</NavLink>
        </div>
      <div className="settings">
        <p><RiUserFill /></p>
        <p><RiSettings3Fill /></p>
      </div>
    </div>
  );
}

export default Nav;
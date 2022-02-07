import '../scss/Nav.scss';
import { NavLink } from 'react-router-dom'
import logo from '../assets/kvizo-logo.png'
// import { RiUserFill, RiSettings3Fill } from 'react-icons/ri'

function Nav() {
  return (
    <div className="navbar">
      <div className="navigation">
        <img className="logo" src={logo} alt="kvizo logo"/>
        <NavLink to="/" className="navlink home-link">Home</NavLink>
        <NavLink to="/create/*" className="navlink create">Create</NavLink>
        <NavLink to="/quizzes" className="navlink quizzes">Quizzes</NavLink>
        <NavLink to="/about" className="navlink about">About</NavLink>
      </div>
      <div className="settings">
        {/* <p><RiUserFill /></p>
        <p><RiSettings3Fill /></p> */}
      </div>
    </div>
  );
}

export default Nav;
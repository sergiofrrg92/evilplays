import logo from '../images/around_the_US_vector.svg';
import { Link, useLocation } from "react-router-dom";

function Header(props) {

  const location = useLocation();

  return (
    <header className="header">
      <img
        id="logo"
        className="logo"
        src={logo}
        alt="A logo that says: Around the US"
      />

      <Link to={`${location.pathname === '/login' ? '/register' : '/login' }`} 
        className={`${props.loggedIn && "header__menu_hidden"} header__menu header__not-logged`}> {location.pathname === '/login' ? 'Sign up' : 'Log in'}</Link>
      
      <div className={`${!props.loggedIn && "header__menu_hidden"} header__menu`}>
        <p className="header__email">{props.userEmail}</p>
        <button className="header__logout" onClick={props.handleLogoutClick}>Log out</button>
      </div>
    </header>
  );
}

export default Header;
import React from "react";

import logo from '../images/evilplays-practicum-palette.jpeg';

function Header(props) {
  return <header className="header">
      <div className="header__menu container">
        <h1 className="header__title">Evilplays</h1>
        <nav className="header__user-menu">
          {props.loggedIn && <p className="header__email">{props.user}</p>}
          {props.loggedIn && <button className="header__log-button" onClick={props.onLogoutClick}>Log out</button>}
          {!props.loggedIn && <button className="header__log-button" onClick={props.onLoginClick}>Log In</button>}
        </nav>
    </div>
    <img id="logo" className="logo container" src={logo} alt="logo" />
  </header>;
}

export default Header;
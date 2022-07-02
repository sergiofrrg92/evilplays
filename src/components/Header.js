import React from "react";

import logo from '../images/evilplays-practicum-palette.jpeg';

function Header() {
  return <header className="header">
      <div className="header__menu container">
        <h1 className="header__title">Evilplays</h1>
        <nav className="header__user-menu">
          <p className="header__email">test@test.com</p>
          <button className="header__logout" /*onClick={props.handleLogoutClick}*/>Log out</button>
        </nav>
    </div>
    <img id="logo" className="logo container" src={logo} alt="logo" />
  </header>;
}

export default Header;
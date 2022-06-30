import React from "react";

import logo from '../images/evilplays.jpg';

function Header() {
  return <header className="header">
    <img id="logo" className="logo" src={logo} alt="logo" />
  </header>;
}

export default Header;
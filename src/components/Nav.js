import logo from "../images/Logo .svg";
import { useState } from 'react';

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open":""}`}>

      <a href="/">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
      </a>
      {/*mobile navbar*/}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/*nav items*/}
        <ul className={`nav-links ${menuOpen ? "visible" : "" }`}>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/">Reservations</a></li>
          <li><a href="/">Order Online</a></li>
          <li><a href="/">Login</a></li>
        </ul>



    </nav>
  );
};


export default Nav;

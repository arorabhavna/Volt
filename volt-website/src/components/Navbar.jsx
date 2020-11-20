import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import './Navbar.css';

import logo from '../images/logo.jpg';

function Navbar() {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark">
      <img src={logo} className="navbar-brand" alt="Logo" onClick={scroll.scrollToTop}/>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item active navbaritem">
            <div className="nav-link text-white text-uppercase ml-5">
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link>
            </div>
          </li>
          <li className="nav-item active navbaritem">
            <div className="nav-link text-white text-uppercase ml-5">
            <Link activeClass="active" to="concept" spy={true} smooth={true} duration={500}>Concept Video</Link>
            </div>
          </li>
          <li className="nav-item active navbaritem">
            <div className="nav-link text-white text-uppercase ml-5">
            <Link activeClass="active" to="docs" spy={true} smooth={true} duration={500}>Documentation</Link>
            </div>
          </li>
          <li className="nav-item active navbaritem">
            <div className="nav-link text-white text-uppercase ml-5">
            <Link activeClass="active" to="team" spy={true} smooth={true} duration={500}>The Team</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
	);
}

export default Navbar;
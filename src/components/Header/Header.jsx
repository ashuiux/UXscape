import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/rabbit_logo.svg";

function Header() {
  return (
    <header className="header">
  
        <Link to="/" className="header__logo">
          <img className="header__logo-image" src={logo} alt="Logo" />
        </Link>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">Home</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about" className="header__nav-link">About</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/methods" className="header__nav-link">All Research Methods</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/methods">All Research Methods</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

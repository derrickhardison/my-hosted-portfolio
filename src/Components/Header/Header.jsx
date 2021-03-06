import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <span className="navbar-brand mb-0 h1 portfolioName">
        Derrick Hardison
      </span>
      <ul className="navbar-nav">
        <li>
          <a className="nav-link" href="#/">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="#/portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="nav-link" href="#/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

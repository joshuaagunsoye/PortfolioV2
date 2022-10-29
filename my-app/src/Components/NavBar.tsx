import React from "react";
import { Link } from "react-router-dom";
import "../Components/NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="/images/logo.png" />
      </Link>
      <div className="right-navs">
        <div className="right-nav-items">
          <Link to="/work">
            <p>Work</p>
          </Link>
        </div>
        <div className="right-nav-items">
          <Link to="/projects">
            <p>Projects</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

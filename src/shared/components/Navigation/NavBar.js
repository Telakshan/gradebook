import React from "react";
import { Link } from "react-router-dom";
import logo from "../laptop-outline.svg";
import Signin from "../../../Authorization/Signin";
import "./NavBar.css";

export const NavLinks = () => {
  return (
    <nav className="nav-bar">

      <img src={logo} className="logo"></img>


      <Link to="/">
        <h1 className="logo-font">gradebook</h1>

      </Link>

      <ul className="nav-menu">
        <li>
          <Link to="/">Add courses</Link>
        </li>
        <li>
          <Link to="/course">My courses</Link>
        </li>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;

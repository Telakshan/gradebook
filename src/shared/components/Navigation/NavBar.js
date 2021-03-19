import React, { Fragment, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../laptop-outline.svg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";
import "./NavBar.css";

export const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const style = {
    height: "25px",
    paddingRight: "5px",
    paddingLeft: "5px",
  };

  const wrapper = useRef(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.addEventListener('click', handleClickOutside, false);
    }
  }, []);

  const handleClickOutside = event => {
    if(wrapper.current && !wrapper.current.contains(event.target)){
      setClicked(false);
    }
  }

  const authLinks = (
    <ul ref={wrapper}>
      <div className='menu-icon' onClick={() => setClicked(!clicked)}>
        <i className={clicked ? `fas fa-times` : `fas fa-bars`}></i>
      </div>
      <div className={clicked ? `nav-menu active` : `nav-menu`}>
      <li className='margin-top' onClick={() => setClicked(!clicked)}>
        <Link to="/posts">Posts</Link>
      </li>
      <li onClick={() => setClicked(!clicked)}>
        <Link to="/profiles">Profiles</Link>
      </li>
      <li onClick={() => setClicked(!clicked)}>
        <Link to="/dashboard">My Profile</Link>
      </li>

      <li onClick={() => setClicked(!clicked)}>
        <Link to="/course">My Courses</Link>
      </li>
      <li onClick={() => setClicked(!clicked)}>
        <Link onClick={logout} to="/">
          Sign out
        </Link>
      </li>
      </div>
    </ul>
  );

  const guestLinks = (
    <ul className="nav-menu">
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/signin">Sign in</Link>
      </li>
    </ul>
  );

  return (
    <nav className="nav-bar">
      {/* <Link className="logo" to="/"> */}
        <img id='logo' src={logo} style={style}></img>
      {/* </Link> */}

      <Link to="/">
        <h1 className="logo-font">gradebook</h1>
      </Link>
      <div>
        
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}

      </div>

    </nav>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar);

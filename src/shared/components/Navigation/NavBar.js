import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import logo from "../laptop-outline.svg";
import Signin from "../../../Authorization/Signin";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';
import "./NavBar.css";

export const NavBar = ({ auth: {isAuthenticated, loading}, logout}) => {

  const style = {
    height: '25px',
    paddingRight: '5px',
    paddingLeft: '5px',
  }

  const authLinks = (

    <ul className="nav-menu">

      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
        
        <li>
          <Link to="/course">My Courses</Link>
        </li>
        <li>
          <Link onClick={logout} to='/'>Sign out</Link>
        </li>
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
     <Link className='logo' to='/'>
     <img src={logo} style={style}></img>

     </Link>

      <Link to="/">
        <h1 className="logo-font">gradebook</h1>
      </Link>

      {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}

      
    </nav>
  );
};

NavBar.protoTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(NavBar);

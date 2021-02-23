import React from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "../shared/components/Button/Button";
import Signin from "../Authorization/Signin";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./Landing.css";

const Landing = ({ isAuthenticated }) => {
  if(isAuthenticated){
    return <Redirect to='/dashboard' />
  }

  return (
    <div>
      <div className="landing-add-courses">
        <h1>Welcome to gradebook</h1>

        <h3>Social network for students</h3>

        <h4>Keep track of your assignments</h4>

        <Link to="/register">
          <Button name={"Register"} />
        </Link>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);

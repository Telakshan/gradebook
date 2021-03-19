import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";

import "./Auth.css";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  const onChange = (n) =>
    setFormData({ ...formData, [n.target.name]: n.target.value });

    if(isAuthenticated){
      return <Redirect to='/dashboard'/>
    }

  return (
    <div className="register">
      <h1>Register</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <label>
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter name here"
          value={name}
          name="name"
          onChange={(n) => onChange(n)}
          required
        ></input>
        <label>
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={(n) => onChange(n)}
          required
        ></input>

        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter password here"
          name="password"
          onChange={(n) => onChange(n)}
          required
          value={password}
        ></input>

        <label>
          {" "}
          <b>Confirm password</b>{" "}
        </label>
        <input
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          onChange={(n) => onChange(n)}
          value={confirmPassword}
        ></input>
        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account?{" "}
        <Link to="/signin" className="register-text">
          Sign in
        </Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps , { setAlert, register })(Register);

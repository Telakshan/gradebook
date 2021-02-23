import React, { Fragment, useState } from "react";
import { connect } from  'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import {Link, Redirect} from 'react-router-dom';
import "./Auth.css";

const Signin = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({

    email: "",
    password: "",
    
  });

  const { email, password } = formData;

  const onSubmit = async e => {
      e.preventDefault();
      login(email, password);
  }

  const onChange = (n) =>
    setFormData({ ...formData, [n.target.name]: n.target.value });


  if(isAuthenticated){
    return <Redirect to='/dashboard'/>
  }

  return (
     
    <div className="register">
      <h1>Sign in</h1>
      <form className="form" onSubmit ={e => onSubmit(e)}>
        
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
          minLength='6'
        ></input>

        <button type='submit'>Sign in</button>
      </form>
      <p>Need to create an account? <Link to='/register' className='register-text'>Register</Link></p>

    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

Signin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

export default connect(mapStateToProps, { login })(Signin);

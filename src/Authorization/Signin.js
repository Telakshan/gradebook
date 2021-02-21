import React, { Fragment, useState } from "react";
import Button from "../shared/components/Button/Button";
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./Auth.css";

const Signin = () => {
  const [formData, setFormData] = useState({

    email: "",
    password: "",
    
  });

  const { email, password } = formData;

  const onSubmit = async e => {
      e.preventDefault();

    ////  axios.post('/api/auth')
      console.log('Success');
  }

  const onChange = (n) =>
    setFormData({ ...formData, [n.target.name]: n.target.value });

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

export default Signin;

import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from 'react-router-dom';
import { createProfile } from '../actions/profile';

import './CreateProfile.css';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    college: "",
    gradeLevel: "",
    major: "",
    shortBio: "",
  });
  const { college, gradeLevel, major, shortBio } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData , history)
  };

  const onChange = (n) =>
    setFormData({ ...formData, [n.target.name]: n.target.value });
  return (
    <div className="register">
      <h1>Create profile</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <label>
          <b>College or University</b>
        </label>
        <input
          type="text"
          placeholder="Enter College here"
          name="college"
          value={college}
          onChange={(n) => onChange(n)}
        ></input>
        <label>
          <b>Grade Level</b>
        </label>
        <input
          type="text"
          placeholder="Grade level"
          name="gradeLevel"
          value={gradeLevel}
          onChange={(n) => onChange(n)}
        ></input>
        <label>
          <b>Major</b>
        </label>
        <input
          type="text"
          placeholder="Major"
          value={major}
          name="major"
          onChange={(n) => onChange(n)}
        ></input>
        <label>
          <b>A few sentences about yourself</b>
        </label>
        <input
          type="text"
          value={shortBio}
          placeholder="Short bio here"
          name="shortBio"
          onChange={(n) => onChange(n)}
        ></input>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));

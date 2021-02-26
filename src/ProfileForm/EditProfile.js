import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { createProfile, getCurrentProfile } from "../actions/profile";

import "./CreateProfile.css";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  history,
  getCurrentProfile,
}) => {
  const [formData, setFormData] = useState({
    college: "",
    gradeLevel: "",
    major: "",
    shortBio: "",
  });
  const { college, gradeLevel, major, shortBio } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  useEffect(() => {
    getCurrentProfile();
    setFormData({
      college: loading || !profile.college ? "" : profile.college,
      gradeLevel: loading || !profile.gradeLevel ? "" : profile.gradeLevel,
      major: loading || !profile.gradeLevel ? "" : profile.major,
      shortBio: loading || !profile.shortBio ? "" : profile.shortBio,
    });
  }, [loading]);

  const onChange = (n) =>
    setFormData({ ...formData, [n.target.name]: n.target.value });

 const style = {
     marginLeft: "5px"
 }
  return (
    <div className="register">
      <h1>Edit profile</h1>
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
        <button type="submit">Update</button>
        <Link to="/dashboard">
          <button style={style}>Back</button>
        </Link>
      </form>
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);

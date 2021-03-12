import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import image from './images/profile.png';

import './ProfileItem.css'

const ProfileItem = ({
  profile: {
    user: { _id, name },
    college,
    gradeLevel,
    major,
    shortBio,
    
  },
}) => {

  return (
    <div className="card">
      <img src={image}></img>
      <h1>{name}</h1>
      <h3>{gradeLevel}</h3>
      <p>{college}</p>
      <p>Major: {major}</p>
      <p>{shortBio}</p>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;

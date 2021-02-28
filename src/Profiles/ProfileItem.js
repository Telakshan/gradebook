import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
      <h1>{name}</h1>
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

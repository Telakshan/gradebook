import React from "react";
import Button from "../../shared/components/Button/Button";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

import "./Course.css";

const CourseName = ({ courseName }) => {
  return (
    <header className="course-title">
      <h1 className="course-name">{courseName}</h1>
      <Link to="/add-assignment" className="link-button">
        Add
      </Link>
    </header>
  );
};

CourseName.defaultProps = {
  courseName: "Course Name",
};

export default connect()(CourseName);

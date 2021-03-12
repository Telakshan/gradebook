import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaTimesCircle} from 'react-icons/fa';

import "./CourseList.css";

const CourseList = ({ courseName }) => {
  return (
    <div className='container'>
      <div className="course-name">
        <Link to="/assignments">
          <div className="assignment">
            <h3>{courseName}<FaTimesCircle className='close'/></h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CourseList;

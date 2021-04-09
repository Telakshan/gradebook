import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import { deleteCourse } from "../../actions/course";
import { connect } from "react-redux";

import "./CourseList.css";

const CourseList = ({ courseId, courseName, deleteCourse }) => {
  return (
    <div className="container">
      <div className="course-name">
        <Link to="/assignments">
          <div className="assignment">
            <h3>
              {courseName}
              <FaTimesCircle className="close" onClick={() => deleteCourse(courseId)} />
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};



const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {deleteCourse})(CourseList);

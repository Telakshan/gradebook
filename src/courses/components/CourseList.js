import React, { useState } from "react";

const CourseList = ({ courseName }) => {
  return (
    <div className="course">
      <Link to='/course'>
        <div className="assignment">
          <h3>{courseName}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CourseList;

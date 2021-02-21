import React from "react";
import Button from "../../shared/components/Button/Button";
import "./Course.css";

const CourseName = ({ courseName }) => {
  return (
    <header className="course-title">
      <h1 className='course-name'>{courseName}</h1>
      <Button size={18} name="Add" />
    </header> 
  );
};

CourseName.defaultProps = {
  courseName: "Course Name",
};

export default CourseName;

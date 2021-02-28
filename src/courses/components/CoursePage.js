import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import axios from "axios";
import { FaTimes } from 'react-icons/fa';

import "./CourseList.css";
import Assignment from "./Assignment";

let array = [];

const getAllCourses = async () => {
  try {
    const res = await axios.get("/api/addcourse");
    array = res.data;
  } catch (error) {
    console.log(error);
  }
};

const CoursePage = () => {
  const [courses, setCourses] = useState(array);

  getAllCourses();

  return (
    <div className="course-page">
      {array.map(({ name }) => (
        <CourseList courseName={name} />
      ))}
      {/* {array.assignments ? <div className='course'>
        <button>Add</button>
        {assignments.map(({ assignment }) => (
          <div>
            {assignment}
          </div>
        ))}
      </div> : null} */}
      
    </div>
  );
};

export default CoursePage;

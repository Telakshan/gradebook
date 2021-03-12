import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import axios from "axios";
import { FaTimes } from 'react-icons/fa';

import "./CourseList.css";
import Assignment from "./Assignment";


let array = [];

const getAllCourses = async () => {
  try {
    const res = await axios.get("/api/course");
    array = res.data;
  } catch (error) {
    console.log(error);
  }
};

const CoursePage = () => {
  const [courses, setCourses] = useState(array);

  useEffect(() => {
    getAllCourses();
  }, [courses])

  console.log(array);
  return (
    <div className="course-page">
      {array.map(({ name, semester }) => (
        <CourseList courseName={name} semester={semester} />
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

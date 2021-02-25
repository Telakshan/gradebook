import React, { useState, Fragment } from "react";
import Button from "../../shared/components/Button/Button";
import CourseName from "./CourseName";
import Assignments from "./Assignments";
import "./Course.css";

const Course = () => {
  const [assignments, setAssignment] = useState([
    {
      id: 1,
      name: "Assignment#1",
      duedate: "Feb 5th 2:30PM",
      completed: true,
      percentage: 12,
      grade: 95,
    },
    {
      id: 2,
      name: "Essay#1",
      duedate: "Feb 20th 2:30PM",
      completed: false,
      percentage: 25,
      grade: 0,
    },
    {
      id: 3,
      name: "Coding assignment",
      duedate: "March 5th 2:30PM",
      completed: true,
      percentage: 10,
      grade: 100,
    },
  ]);

  const deleteAssignment = (id) => {
    setAssignment(assignments.filter((assignment) => assignment.id !== id));
  };

  return (
    <Fragment>
      <div className="course">
        <CourseName courseName="CS316" />
        {assignments.length > 0 ? (
          <Assignments assignments={assignments} onDelete={deleteAssignment} />
        ) : (
          <h1>No assignments due</h1>
        )}

        <h3 className={assignments.length === 0 ? "grade" : "d-grade"}>
          Total grade so far:{" "}
        </h3>
      </div>

      
    </Fragment>
  );
};

export default Course;

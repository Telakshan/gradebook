import React, { useState } from "react";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    semester: "",
    completed: false,
  });

  const onChange = (n) =>
    setFormData({ ...formData, [n.target.name]: n.target.value });
  return (
    <div className="register">
      <form className="form">
          
        <label>
          <b>Course</b>
        </label>
        <input
          type="text"
          placeholder="Enter Course Name or ID here"
          name="courseName"
          onChange={(n) => onChange(n)}
        ></input>

        <label>
          <b>Semester</b>
        </label>
        <input
          type="text"
          placeholder="Enter semester"
          name="semester"
          onChange={(n) => onChange(n)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCourse;

import React, { useState } from "react";

const AddAssignment = () => {
  const [formData, setFormData] = useState({
    assignmentName: "",
    grade: "",
    percentage: "",
    completed: false,
  });

  const onChange = (n) =>
    setFormData({ ...formData, [n.target.name]: n.target.value });
  return (
    <div className="register">
      <form className="form">
        <label>
          <b>Assignment Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Assignment Name here"
          name="assignmentName"
          onChange={(n) => onChange(n)}
        ></input>

        <label>
          <b>Percentage</b>
        </label>
        <input
          type="text"
          placeholder="Enter Percentage"
          name="percentage"
          onChange={(n) => onChange(n)}
        ></input>

        <label>
          <b>Grade</b>
        </label>
        <input
          type="text"
          placeholder="Enter Grade if completed"
          name="grade"
          onChange={(n) => onChange(n)}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAssignment;
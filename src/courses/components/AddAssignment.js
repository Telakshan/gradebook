import React, { useState } from "react";
import { connect } from "react-redux";

import { addAssignment } from "../../actions/course";

const AddAssignment = ({ courseId, addAssignment }) => {
  const [formData, setFormData] = useState({
    assignmentName: "",
    grade: "",
    percentage: "",
    completed: false,
  });

  const onChange = (n) =>
    setFormData({ ...formData, [n.target.name]: n.target.value });

  const assignment = {
    maxWidth: "500px",
    justifyContent: "center",
    margin: "20px auto auto",
  };

  return (
    <div style={assignment}>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addAssignment(courseId, formData);
        }}
      >
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

export default connect(null, { addAssignment })(AddAssignment);

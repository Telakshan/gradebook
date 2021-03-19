import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Assignment = ({ assignment, onDelete }) => {
  const [formData, setFormData] = useState({
    grade: 0,
    percentage: 0,
    completed: false,
  });

  const { grade, percentage, completed } = formData;

  const onChange = (n) =>
    setFormData({ ...formData, [n.target.name]: n.target.value });
  return (
    <div className="assignment">
      <h3>
        {assignment.name}{" "}
        <FaTimes className="close" onClick={() => onDelete(assignment.id)} />
      </h3>
      <p>{assignment.duedate}</p>
      <label className="label">Grade: </label>
      <input
        type="text"
        name="grade"
         value={grade}
        onChange={(n) => onChange(n)}
      ></input>
      <label className="label">Percentage: </label>
      <input
        type="text"
        name="percentage"
         value={percentage}
        onChange={(n) => onChange(n)}
      ></input>
      <p className="completed">
        <input
          type="checkbox"
          name="completed"
          checked={completed}
          value={completed}
          onChange={(e) => {
            setFormData({ ...formData, completed: !completed });
          }}
        ></input>
        Completed
      </p>
    </div>
  );
};

export default Assignment;

import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { addCourse } from '../../actions/course';


const AddCourse = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    semester: "",
    completed: false,
  });

  const {name, semester, completed } = formData;

  console.log(props);


  const register = {
    maxWidth: "500px",
    justifyContent: "center",
    margin: "20px auto auto"
  }

  const onChange = (n) =>
    setFormData({ ...formData, [n.target.name]: n.target.value });

  return (
    <div style={register}>
      <form className="form">
          
        <label>
          <b>Course</b>
        </label>
        <input
          type="text"
          placeholder="Enter Course Name or ID here"
          name="name"
          onChange={(n) => onChange(n)}
          value={name}
        ></input>

        <label>
          <b>Semester</b>
        </label>
        <input
          type="text"
          placeholder="Enter semester"
          name="semester"
          value={semester}
          onChange={(n) => onChange(n)}
        ></input>

        <p className='completed'><input type='checkbox' name='completed' checked={completed} value={completed} onChange={e => {setFormData({...formData, completed: !completed})}}></input>Completed</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

AddCourse.propTypes = {
  addCourse: PropTypes.func.isRequired,
}

export default connect(null, {addCourse})(AddCourse);

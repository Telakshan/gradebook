import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import { addCourse } from '../../actions/course';


const AddCourse = ({addCourse}) => {
  const [formData, setFormData] = useState({
    name: "",
    semester: "",
    completed: false,
  });

  const {name, semester, completed } = formData;

  const register = {
    maxWidth: "500px",
    justifyContent: "center",
    margin: "20px auto auto"
  }

  const style = {
    marginLeft: '10px'
  }

  const onChange = (n) =>
    setFormData({ ...formData, [n.target.name]: n.target.value });

  const submitCourse = (e) => {
    e.preventDefault();
    addCourse(formData);
  }

  return (
    <div style={register}>
      <form className="form" onSubmit={(e) => submitCourse(e)}>
          
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
        <Link to='/course' className='link-button' style={style}>Back to courses</Link>
      </form>
    </div>
  );
};

AddCourse.propTypes = {
  addCourse: PropTypes.func.isRequired,
}

export default connect(null, {addCourse})(AddCourse);

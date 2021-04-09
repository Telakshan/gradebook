import React from "react";
import { Link } from "react-router-dom";
import edit from "./create-outline.svg";
import "./Dashboard.css";

const DashboardAction = () => {
  const style = {
    maxWidth: "25px",
  };
  return (
    <React.Fragment>
      <div className="actions">
        <Link to="/course">
          <h1>Go to Assignments</h1>
        </Link>

        <Link to='/course'>
          <h3>Go to Courses</h3>
        </Link>

        <Link to="/add-course">
          <h4>
            <i className="fas fa-plus" />
            Add course
          </h4>
        </Link>

        <Link to="/add-assignment">
          <h4>
            <i class="fas fa-list"></i>Add Assignment
          </h4>
        </Link>
      </div>

      <footer className="display-bottom">
        <div className="edit-profile">
          <Link to="/edit-profile">
            {/* <img style={style} src={edit} className="ic"></img> */}
            <h1 className="t">
              {" "}
              <i class="far fa-edit"></i>
              Edit Profile
            </h1>
          </Link>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default DashboardAction;

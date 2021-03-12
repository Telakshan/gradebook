import React from "react";
import { Link } from "react-router-dom";
import edit from "./create-outline.svg";

const DashboardAction = () => {
  const style = {
    maxWidth: "25px",
  };
  return (
    <React.Fragment>
      <div>
        <Link to="/add-course">
          <h1>Add course</h1>
        </Link>

        <Link to="/add-assignment">
          <h1>Add Assignment</h1>
        </Link>

        
      </div>

      <footer className='display-bottom'>
      <div className="edit-profile">
          <Link to="/edit-profile">
            <img style={style} src={edit} className="ic"></img>
            <h1 className="t">Edit Profile</h1>
          </Link>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default DashboardAction;

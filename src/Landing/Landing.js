import React from "react";
import { Link } from "react-router-dom";
import Button from "../shared/components/Button/Button";
import Signin from "../Authorization/Signin";
import "./Landing.css";

export const Landing = () => {
  return (
    <div>
      <div className="landing-add-courses">
        <h1>Welcome to gradebook</h1>

        <h3>Social network for students</h3>

        <h4>Keep track of your assignments</h4>

        <Link to="/register">
          <Button name={"Register"} />
          {/*<Button name={'Log in'}/>*/}
        </Link>
      </div>
    </div>
  );
};

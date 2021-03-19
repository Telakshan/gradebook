import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Loading from "../Loading/Loading";
import { getCurrentProfile } from "../actions/profile";
import DashboardAction from './DashboardAction';

import "./Dashboard.css";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  const assignments = 4;

  return loading && profile === null ? (
    <Loading />
  ) : (
    <Fragment>
      <div className="dashboard">
        <h1>My Profile</h1>
        <p>Welcome {user && user.name}</p>
        <h3>You have {assignments} incomplete assignments</h3>
        {profile !== null ? (
          <Fragment>
            <DashboardAction/>
          </Fragment>
        ) : (
          <Fragment>
              <p>You have not yet created a profile</p>
              <Link to='/create-profile'>Create profile</Link>
          </Fragment>
          
        )}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

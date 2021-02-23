import Landing from "./Landing/Landing";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import NavBar from "./shared/components/Navigation/NavBar";
import Register from "./Authorization/Register";
import Signin from "./Authorization/Signin";
import Course from "./courses/components/Course";
import React, { Fragment, useEffect } from "react";
import store from "./store";
import Alert from './shared/components/Alert/Alert';
import Dashboard from './NewsFeed/Dashboard';
import { Provider } from "react-redux";
import { loadUser } from './actions/auth';
import PrivateRoute from './routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import CreateProfile from './ProfileForm/CreateProfile';

import "./App.css";


if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route path="/register" component={Register} exact />
              <Route path="/signin" component={Signin} exact />
              <Route path="/course" component={Course} exact />
              <PrivateRoute exact path="/dashboard" component={Dashboard} exact />
              <PrivateRoute exact path="/create-profile" component={CreateProfile} exact />

            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

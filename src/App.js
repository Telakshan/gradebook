import { Landing } from "./Landing/Landing";
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
import Alert from './shared/components/Alert/Alert'
import "./App.css";
import { Provider } from "react-redux";
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

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
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

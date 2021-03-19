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
import Alert from "./shared/components/Alert/Alert";
import Dashboard from "./NewsFeed/Dashboard";
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";
import EditProfile from "./ProfileForm/EditProfile";
import PrivateRoute from "./routing/PrivateRoute";
import setAuthToken from "./utils/setAuthToken";
import CreateProfile from "./ProfileForm/CreateProfile";
import CoursePage from "./courses/components/CoursePage";
import Posts from "./Posts/Posts";
import Profiles from "./Profiles/Profiles";
import Post from './Post/Post';

import "./App.css";
import AddCourse from "./courses/components/AddCourse";
import AddAssignment from "./courses/components/AddAssignment";
import AddPost from "./Posts/AddPost";
import CommentForm from "./Post/CommentForm";

if (localStorage.token) {
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
              <Route exact path="/register" component={Register} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/assignments" component={Course} />
              <PrivateRoute
                exact
                path="/dashboard"
                component={Dashboard}
                exact
              />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
                exact
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
                exact
              />
              <PrivateRoute exact path="/add-course" component={AddCourse} />
              <PrivateRoute
                exact
                path="/add-assignment"
                component={AddAssignment}
              />
              <PrivateRoute exact path="/course" component={CoursePage} />
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path='/addpost' component={AddPost}/>
              <PrivateRoute exact path='/posts/:id' component={Post}/>
              <PrivateRoute exact path='/comment' component={CommentForm}/>
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

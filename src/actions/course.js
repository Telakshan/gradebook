import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_COURSES,
  GET_ASSIGNMENTS,
  PROFILE_ERROR,
  ADD_COURSE,
  ADD_ASSIGNMENT,
  CLEAR_COURSES,
  DELETE_COURSE,
  POST_ERROR,
} from "./types";

//get all assignments
export const getAllAssignments = (courseId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/course/assignments/${courseId}`);

    dispatch({
      type: GET_ASSIGNMENTS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//get all courses
export const getAllCourses = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/course/${userId}`);

    dispatch({
      type: GET_COURSES,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Add course
export const addCourse = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post("/api/course", formData, config);

    dispatch({
      type: ADD_COURSE,
      payload: response.data,
    });
    dispatch(setAlert("Course Added", "success"));

  } catch (error) {

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error,
        status: error,
      },
    });
  }
};

//Delete Course
export const deleteCourse = (courseId) => async (dispatch) => {
  try {
    const res = await axios.delete(`api/course/${courseId}`);

    dispatch({
      type: DELETE_COURSE,
      payload: { courseId },
    });
    dispatch(setAlert("Course deleted", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error,
        status: error,
      },
    });
  }
};

//Add assignment
export const addAssignment = (courseId, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `/api/course/assignment/${courseId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COURSE,
      payload: response.data,
    });
    dispatch(setAlert("Assignment Added", "success"));
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

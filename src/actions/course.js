import axios from 'axios';
import {setAlert} from './alert';
import {
    GET_COURSES,
    GET_ASSIGNMENTS,
    PROFILE_ERROR,
    ADD_COURSE,
    ADD_ASSIGNMENT
} from './types';

//get all assignments
export const getAllAssignments = (courseId) => async dispatch => {
    try {
        const response = await axios.get(`/api/course/assignments/${courseId}`);

        dispatch({
            type: GET_ASSIGNMENTS,
            payload: response.data
        })
        
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        });
    }
}

//get all courses
export const getAllCourses = () => async dispatch => {
    try{
        const res = await axios.get('/api/course');
        dispatch({
            type: GET_COURSES,
            payload: res.data
        })
    }catch(error){
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}

        });
    }
}


//Add course
export const addCourse = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post('/api/addcourse', formData, config);

        dispatch({
            type: ADD_COURSE,
            payload: response.data
        });
        dispatch(setAlert('Course Added', 'success'));

        history.push('/dashboard');
    
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        })
    }
}

//Add assignment
export const AddAssignment = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.patch('/api/course/assignment', formData, config);

        dispatch({
            type: ADD_COURSE,
            payload: response.data
        });
        dispatch(setAlert('Assignment Added', 'success'));

        history.push('/dashboard');
    
        
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        })
    }
}
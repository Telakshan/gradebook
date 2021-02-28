import axios from 'axios';
import { setAlert } from './alert';

import {
    CLEAR_PROFILE,
    GET_PROFILE,
    PROFILE_ERROR,
    ACCOUNT_DELETED,
    UPDATE_COURSES,
    GET_PROFILES,
    GET_COURSES
} from './types';

export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: { 
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post('/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: response.data
        });
        dispatch(setAlert(edit ? 'Profile updated' : 'Profile created', 'success'));

        if(!edit){
            history.push('/dashboard');
        }
        
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

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
        
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}

export const deleteAccount = () => async dispatch => {

    if(window.confirm('Are you sure? This is permanent!')){

        try {
            const res = await axios.delete('/api/profile');
            
            dispatch({type: CLEAR_PROFILE});
            dispatch({type: ACCOUNT_DELETED});

            dispatch(setAlert('Your account has been permanently deleted'))

        } catch (error) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: error.response.statusText, status: error.response.status }
            })
        }

    }

}

//Add course
export const AddCourse = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post('/api/addcourse', formData, config);

        dispatch({
            type: UPDATE_COURSES,
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
        const response = await axios.post('/api/addcourse', formData, config);

        dispatch({
            type: UPDATE_COURSES,
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

//Get all profiles
export const getProfiles = () => async dispatch => {

    dispatch({type: CLEAR_PROFILE});

    try{
        const response = await axios.get('/api/profile');

        dispatch({
            type: GET_PROFILES,
            payload: response.data
        });
    }catch(error){
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        });
    }
} 


export const getProfileById = userId => async dispatch => {
    
    try{
        const response = await axios.get(`/api/profile/user/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: response.data
        });
    }catch(error){
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        });
    }
} 


export const getCourses = () => async dispatch => {
    try {
        const response = await axios.get('/api/addcourse');
        
        dispatch({
            type: GET_COURSES,
            payload: response.data
        })

        
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        })
    }
}
 
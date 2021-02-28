import React from 'react';
import { Link } from 'react-router-dom';
import edit from './create-outline.svg';

const DashboardAction = () => {

    const style = {
        maxWidth: '25px'
    }
    return (
        <div>
            <Link to='/edit-profile'>
                <img style={style} src={edit}></img>
            </Link>

            <Link to='/add-course'>
                <h1>Add course</h1>
            </Link>

            <Link to='/add-assignment'>
                <h1>Add Assignment</h1>
            </Link>
    
        </div>
    )
}

export default DashboardAction

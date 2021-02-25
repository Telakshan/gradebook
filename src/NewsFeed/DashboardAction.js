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
    
        </div>
    )
}

export default DashboardAction

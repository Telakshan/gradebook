import React from 'react';
import {FaTimes} from 'react-icons/fa'

const Assignment = ({assignment, onDelete}) => {
    return (
        <div className='assignment'>

            <h3 >{assignment.name} <FaTimes className='close' onClick={() => onDelete(assignment.id)}/></h3>
            <p>{assignment.duedate}</p>
            <label className='label'>Grade: </label>
            <input></input>
            <label className='label'>Percentage: </label>
            <input></input>

        </div>
    )
}

export default Assignment;

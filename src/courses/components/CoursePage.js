import React, {useState} from 'react';
import CourseList from './CourseList';

import './CourseList.css';

const array = [
    {
      id: Math.random(),
      name: 'CS316',
      completed: false,
      totalGrade: 95,
    },
    {
      id: Math.random(),
      name: 'CS344',
      completed: false,
      totalGrade: 100,
    }
  ];

 

const CoursePage = () => {

    const[courses, setCourses] = useState(array);


    return (
        <div className='course-page'>

            {
                array.map(({name}) => (
                    <CourseList courseName={name}/>
                ))
            }
            
        </div>
    )
}

export default CoursePage

import React, { useEffect } from "react";
import CourseList from "./CourseList";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllCourses } from "../../actions/course.js";

import "./CourseList.css";
import Loading from "../../Loading/Loading";
const CoursePage = ({ getAllCourses, course: { courses, loading } }) => {
  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="course-page">
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseList key={course._id} courseName={course.name} />
            ))
          ) : (
            <h4>No Courses</h4>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

CoursePage.propTypes = {
  getAllCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  course: state.course,
});

export default connect(mapStateToProps, { getAllCourses })(CoursePage);

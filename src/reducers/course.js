import {
  GET_COURSES,
  ADD_COURSE,
  ADD_ASSIGNMENT,
  CLEAR_COURSES,
  PROFILE_ERROR,
  DELETE_COURSE
} from "../actions/types";

const initialState = {
  course: null,
  courses: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        courses: payload,
        loading: false,
      };

    case ADD_COURSE:
      return {
        ...state,
        courses: [payload, ...state.posts],
        loading: false,
      };

    case DELETE_COURSE:
      return{
        ...state,
        courses: state.courses.filter((course) => course._id !== payload),
        loading: false
      }

    case ADD_ASSIGNMENT:
      return {
        ...state,
        courses: {...state.course, assignments: payload},
        loading: false,
      };

    case CLEAR_COURSES:
      return {
        ...state,
        courses: null,
        loading: false,
      };
    default:
      return state;
  }
}

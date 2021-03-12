import { GET_COURSES, ADD_COURSE, ADD_ASSIGNMENT } from "../actions/types";

const initialState = {
  courses: null,
  loading: true,
  courses: [],
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
        return{
            ...state,
            courses: payload,
            loading: false
        }

    case ADD_ASSIGNMENT:
        return{
            ...state,
            courses: payload,
            loading: false
        }

  }
}

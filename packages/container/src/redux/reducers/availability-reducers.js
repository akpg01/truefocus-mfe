import {
  USER_AVAILABILTY_SUCCESS,
  USER_AVAILABILTY_FAIL,
  USER_AVAILABILTY_REQUEST,
  UPDATE_USER_AVAILABILTY_FAIL,
  UPDATE_USER_AVAILABILTY_REQUEST,
  UPDATE_USER_AVAILABILTY_SUCCESS,
  CREATE_USER_AVAILABILTY_FAIL,
  CREATE_USER_AVAILABILTY_REQUEST,
  CREATE_USER_AVAILABILTY_SUCCESS,
} from "../constants/availabilityConstants";

export const getAvailabilityReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_AVAILABILTY_REQUEST:
      return { ...state, loading: true };
    case USER_AVAILABILTY_SUCCESS:
      return { ...state, loading: false, available: action.payload };
    case USER_AVAILABILTY_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateAvailablityReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_AVAILABILTY_REQUEST:
      return { ...state, loading: true };
    case UPDATE_USER_AVAILABILTY_SUCCESS:
      return { ...state, loading: false, available: action.payload };
    case UPDATE_USER_AVAILABILTY_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createAvailabilityReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER_AVAILABILTY_REQUEST:
      return { ...state, loading: true };
    case CREATE_USER_AVAILABILTY_SUCCESS:
      return { ...state, loading: false, available: action.paylaod };
    case CREATE_USER_AVAILABILTY_FAIL:
      return { ...state, loading: false, error: action.paylaod };
    default:
      return state;
  }
};

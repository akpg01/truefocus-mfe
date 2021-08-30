import {
  UPDATE_TERM_GOAL_FAIL,
  UPDATE_TERM_GOAL_REQUEST,
  UPDATE_TERM_GOAL_SUCCESS,
  USER_GOALS_REQUEST,
  USER_GOALS_FAIL,
  USER_GOALS_SUCCESS,
  CREATE_TERM_GOAL_FAIL,
  CREATE_TERM_GOAL_REQUEST,
  CREATE_TERM_GOAL_SUCCESS,
  REMOVE_TERM_GOAL_FAIL,
  REMOVE_TERM_GOAL_REQUEST,
  REMOVE_TERM_GOAL_SUCCESS,
  CREATE_USER_GOAL_FAIL,
  CREATE_USER_GOAL_SUCCESS,
  CREATE_USER_GOAL_REQUEST,
} from "../constants/goalsConstants";

export const getGoalsReducer = (
  state = { shortterm: [], midterm: [], longterm: [] },
  action
) => {
  switch (action.type) {
    case USER_GOALS_REQUEST:
      return { ...state, loading: true };
    case USER_GOALS_SUCCESS:
      return { ...state, loading: false, goals: action.payload };
    case USER_GOALS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createUserGoalReducer = (
  state = { shortterm: [], midterm: [], longterm: [] },
  action
) => {
  switch (action.type) {
    case CREATE_USER_GOAL_REQUEST:
      return { ...state, loading: true };
    case CREATE_USER_GOAL_SUCCESS:
      return { ...state, loading: false, success: true, goals: action.payload };
    case CREATE_USER_GOAL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const removeTermGoalReducer = (
  state = {
    shortterm: [],
    midterm: [],
    longterm: [],
  },
  action
) => {
  switch (action.type) {
    case REMOVE_TERM_GOAL_REQUEST:
      return { ...state, loading: true };
    case REMOVE_TERM_GOAL_SUCCESS:
      return { ...state, loading: false, success: true, goals: action.payload };
    case REMOVE_TERM_GOAL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createTermGoalReducer = (
  state = {
    shortterm: [],
    midterm: [],
    longterm: [],
  },
  action
) => {
  switch (action.type) {
    case CREATE_TERM_GOAL_REQUEST:
      return { ...state, loading: true };
    case CREATE_TERM_GOAL_SUCCESS:
      return { ...state, loading: false, success: true, goals: action.payload };
    case CREATE_TERM_GOAL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateTermGoalReducer = (
  state = {
    shortterm: [],
    midterm: [],
    longterm: [],
  },
  action
) => {
  switch (action.type) {
    case UPDATE_TERM_GOAL_REQUEST:
      return { ...state, loading: true };
    case UPDATE_TERM_GOAL_SUCCESS:
      return { ...state, loading: false, success: true, goals: action.payload };
    case UPDATE_TERM_GOAL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

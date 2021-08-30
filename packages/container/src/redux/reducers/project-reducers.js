import {
  USER_PROJECT_REQUEST,
  USER_PROJECT_SUCCESS,
  USER_PROJECT_FAIL,
  USER_PROJECT_UPDATE_FAIL,
  USER_PROJECT_UPDATE_REQUEST,
  USER_PROJECT_UPDATE_SUCCESS,
  USER_PROJECT_CREATE_FAIL,
  USER_PROJECT_CREATE_REQUEST,
  USER_PROJECT_CREATE_SUCCESS,
  USER_PROJECT_DELETE_FAIL,
  USER_PROJECT_DELETE_REQUEST,
  USER_PROJECT_DELETE_SUCCESS,
  USER_PROJECT_COMPLETE_FAIL,
  USER_PROJECT_COMPLETE_REQUEST,
  USER_PROJECT_COMPLETE_SUCCESS,
  PROJECT_CREATE_POMODORO_FAIL,
  PROJECT_CREATE_POMODORO_REQUEST,
  PROJECT_CREATE_POMODORO_SUCCESS,
  PROJECT_CREATE_SCHEDULE_FAIL,
  PROJECT_CREATE_SCHEDULE_REQUEST,
  PROJECT_CREATE_SCHEDULE_SUCCESS,
} from "../constants/projectConstants";

export const getProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROJECT_REQUEST:
      return { ...state, loading: true };
    case USER_PROJECT_SUCCESS:
      return { ...state, loading: false, project: action.payload };
    case USER_PROJECT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROJECT_CREATE_REQUEST:
      return { ...state, loading: true };
    case USER_PROJECT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        project: action.payload,
      };
    case USER_PROJECT_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROJECT_UPDATE_REQUEST:
      return { ...state, loading: true };
    case USER_PROJECT_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        project: action.payload,
      };
    case USER_PROJECT_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROJECT_DELETE_REQUEST:
      return { ...state, loading: true };
    case USER_PROJECT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        project: action.payload,
      };
    case USER_PROJECT_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const completedProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROJECT_COMPLETE_REQUEST:
      return { ...state, loading: true };
    case USER_PROJECT_COMPLETE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        project: action.payload,
      };
    case USER_PROJECT_COMPLETE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const projectScheduleCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_CREATE_SCHEDULE_REQUEST:
      return { loading: true };
    case PROJECT_CREATE_SCHEDULE_SUCCESS:
      return { loading: false, success: true };
    case PROJECT_CREATE_SCHEDULE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const projectPomodoroCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_CREATE_POMODORO_REQUEST:
      return { loading: true };
    case PROJECT_CREATE_POMODORO_SUCCESS:
      return { loading: false, success: true };
    case PROJECT_CREATE_POMODORO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  PASSWORD_CHANGE_FAIL,
  PASSWORD_CHANGE_REQUEST,
  PASSWORD_CHANGE_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  ACTIVATE_ACCOUNT_FAIL,
  ACTIVATE_ACCOUNT_REQUEST,
  ACTIVATE_ACCOUNT_SUCCESS,
} from "../constants/auth-constants";

export const loginReducers = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case LOGOUT_REQUEST:
      return { loading: true };
    case LOGOUT_SUCCESS:
      return {};
    case LOGOUT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case ACTIVATE_ACCOUNT_REQUEST:
      return { loading: true };
    case ACTIVATE_ACCOUNT_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case ACTIVATE_ACCOUNT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload.data };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case PASSWORD_CHANGE_REQUEST:
      return { loading: true };
    case PASSWORD_CHANGE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case PASSWORD_CHANGE_FAIL:
      return { loading: false, error: action.payload };
    case PASSWORD_RESET_REQUEST:
      return { loading: true };
    case PASSWORD_RESET_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case PASSWORD_RESET_FAIL:
      return { loading: false, error: action.payload };
    case FORGOT_PASSWORD_REQUEST:
      return { loading: true };
    case FORGOT_PASSWORD_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case FORGOT_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

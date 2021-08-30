import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_FAIL,
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
  ACTIVATE_ACCOUNT_FAIL,
  ACTIVATE_ACCOUNT_REQUEST,
  ACTIVATE_ACCOUNT_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
} from "../constants/authConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/v1/auth/login",
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST });
    await axios.get("/api/v1/auth/logout");
    dispatch({ type: LOGOUT_SUCCESS });

    localStorage.removeItem("userData");
    localStorage.removeItem("calculator");
    localStorage.removeItem("goals");
    localStorage.removeItem("available");
    localStorage.removeItem("project");
    localStorage.removeItem("matches");
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/v1/auth/register",
      { name, email, password },
      config
    );

    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const activate = (token) => async (dispatch) => {
  try {
    dispatch({ type: ACTIVATE_ACCOUNT_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/api/v1/auth/activateAccount/${token}`,
      config
    );
    dispatch({ type: ACTIVATE_ACCOUNT_SUCCESS, payload: data });

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ACTIVATE_ACCOUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const getUserDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/auth/me`, config);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `/api/v1/auth/updatedetails`,
      user,
      config
    );

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const userChangePassword = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: PASSWORD_CHANGE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `/api/v1/auth/updatepassword`,
      user,
      config
    );

    dispatch({ type: PASSWORD_CHANGE_SUCCESS, payload: data });

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PASSWORD_CHANGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const userForgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/v1/auth/forgotpassword",
      { email },
      config
    );

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, success: true, payload: data });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const userResetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({ type: PASSWORD_RESET_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `/api/v1/auth/resetpassword/${token}`,
      { password },
      config
    );
    dispatch({ type: PASSWORD_RESET_SUCCESS, success: true, payload: data });

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

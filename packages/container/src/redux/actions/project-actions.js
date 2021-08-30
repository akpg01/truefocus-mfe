import axios from "axios";
import {
  USER_PROJECT_REQUEST,
  USER_PROJECT_FAIL,
  USER_PROJECT_SUCCESS,
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

export const listUserProjects = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROJECT_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/projects?user=${id}`, config);

    dispatch({ type: USER_PROJECT_SUCCESS, payload: data });

    localStorage.setItem("project", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_PROJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const createUserProject = (fields) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROJECT_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/v1/projects`, fields, config);

    dispatch({ type: USER_PROJECT_CREATE_SUCCESS, payload: data });

    localStorage.setItem("project", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_PROJECT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const updateUserProject = (id, fields) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROJECT_UPDATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/v1/projects/${id}`, fields, config);

    dispatch({ type: USER_PROJECT_UPDATE_SUCCESS, payload: data });

    localStorage.setItem("project", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_PROJECT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const userProjectCompleted = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROJECT_COMPLETE_REQUEST });
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
      `/api/v1/projects/${id}/completed`,
      config
    );

    dispatch({ type: USER_PROJECT_COMPLETE_SUCCESS, payload: data });

    localStorage.setItem("project", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_PROJECT_COMPLETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const deleteUserProject = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROJECT_DELETE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/v1/projects/${id}`, config);

    dispatch({ type: USER_PROJECT_DELETE_SUCCESS, payload: data });

    localStorage.setItem("project", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_PROJECT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const createProjectSchedule =
  (projectId, schedule) => async (dispatch, getState) => {
    try {
      dispatch({ type: PROJECT_CREATE_SCHEDULE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `/api/v1/projects/${projectId}/schedules`,
        schedule,
        config
      );

      dispatch({ type: PROJECT_CREATE_SCHEDULE_SUCCESS });
    } catch (error) {
      dispatch({
        type: PROJECT_CREATE_SCHEDULE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response && error.response.data
            ? error.response.data.error
            : error.message,
      });
    }
  };

export const createProjectPomodoro =
  (projectId) => async (dispatch, getState) => {
    try {
      dispatch({ type: PROJECT_CREATE_POMODORO_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(`/api/v1/projects/${projectId}/pomodoros`, config);

      dispatch({ type: PROJECT_CREATE_POMODORO_SUCCESS });
    } catch (error) {
      dispatch({
        type: PROJECT_CREATE_POMODORO_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response && error.response.data
            ? error.response.data.error
            : error.message,
      });
    }
  };

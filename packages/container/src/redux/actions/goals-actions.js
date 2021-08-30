import axios from "axios";
import {
  USER_GOALS_FAIL,
  USER_GOALS_REQUEST,
  USER_GOALS_SUCCESS,
  UPDATE_TERM_GOAL_FAIL,
  UPDATE_TERM_GOAL_REQUEST,
  UPDATE_TERM_GOAL_SUCCESS,
  CREATE_TERM_GOAL_FAIL,
  CREATE_TERM_GOAL_REQUEST,
  CREATE_TERM_GOAL_SUCCESS,
  REMOVE_TERM_GOAL_FAIL,
  REMOVE_TERM_GOAL_REQUEST,
  REMOVE_TERM_GOAL_SUCCESS,
  CREATE_USER_GOAL_FAIL,
  CREATE_USER_GOAL_REQUEST,
  CREATE_USER_GOAL_SUCCESS,
} from "../constants/goalsConstants";

export const createUserGoals = (goal) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_USER_GOAL_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/v1/goals`, goal, config);

    dispatch({ type: CREATE_USER_GOAL_SUCCESS, payload: data });

    localStorage.setItem("goals", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CREATE_USER_GOAL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const listUserGoals = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_GOALS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/goals?user=${id}`, config);

    dispatch({ type: USER_GOALS_SUCCESS, payload: data });

    localStorage.setItem("goals", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_GOALS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const updateUserGoalTerm =
  (goal, id, goalId, term) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_TERM_GOAL_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const fields = { term, goalId, goal };

      const { data } = await axios.put(
        `/api/v1/goals/${id}/term`,
        fields,
        config
      );
      dispatch({ type: UPDATE_TERM_GOAL_SUCCESS, payload: data });

      localStorage.setItem("goals", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: UPDATE_TERM_GOAL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response && error.response.data
            ? error.response.data.error
            : error.message,
      });
    }
  };

export const createUserGoalTerm =
  (id, term, goal) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_TERM_GOAL_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const fields = { term, goal };

      const { data } = await axios.post(
        `/api/v1/goals/${id}/term`,
        fields,
        config
      );

      dispatch({ type: CREATE_TERM_GOAL_SUCCESS, payload: data });

      localStorage.setItem("goals", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: CREATE_TERM_GOAL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response && error.response.data
            ? error.response.data.error
            : error.message,
      });
    }
  };

export const removeUserGoalTerm =
  (id, term, goalId) => async (dispatch, getState) => {
    try {
      dispatch({ type: REMOVE_TERM_GOAL_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.delete(
        `/api/v1/goals/${id}/${goalId}/${term}`,
        config
      );

      dispatch({ type: REMOVE_TERM_GOAL_SUCCESS, payload: data });

      localStorage.setItem("goals", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: REMOVE_TERM_GOAL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response && error.response.data
            ? error.response.data.error
            : error.message,
      });
    }
  };

import axios from "axios";

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

export const listUserAvailability = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_AVAILABILTY_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/available?user=${id}`, config);

    dispatch({ type: USER_AVAILABILTY_SUCCESS, payload: data });

    localStorage.setItem("available", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_AVAILABILTY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const createUserAvailability =
  (fields) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_USER_AVAILABILTY_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      console.log("this fields");
      const { data } = await axios.post(`/api/v1/available`, fields, config);

      dispatch({ type: CREATE_USER_AVAILABILTY_SUCCESS, payload: data });

      localStorage.setItem("available", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: CREATE_USER_AVAILABILTY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response && error.response.data
            ? error.response.data.error
            : error.message,
      });
    }
  };

export const updateUserAvailability =
  (id, fields) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_USER_AVAILABILTY_REQUEST });
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
        `/api/v1/available/${id}`,
        fields,
        config
      );

      dispatch({ type: UPDATE_USER_AVAILABILTY_SUCCESS, payload: data });

      localStorage.setItem("available", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: UPDATE_USER_AVAILABILTY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response && error.response.data
            ? error.response.data.error
            : error.message,
      });
    }
  };

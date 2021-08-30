import axios from "axios";
import {
  CALCULATOR_DATA_FETCH_FAIL,
  CALCULATOR_DATA_FETCH_REQUEST,
  CALCULATOR_DATA_FETCH_SUCCESS,
  CREATE_CALCULATOR_FAIL,
  CREATE_CALCULATOR_REQUEST,
  CREATE_CALCULATOR_SUCCESS,
  UPDATE_CALCULATOR_FAIL,
  UPDATE_CALCULATOR_REQUEST,
  UPDATE_CALCULATOR_SUCCESS,
} from "../constants/calculatorConstants";

export const userCalculatorData = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CALCULATOR_DATA_FETCH_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/calculators?user=${id}`, config);

    dispatch({ type: CALCULATOR_DATA_FETCH_SUCCESS, payload: data });

    localStorage.setItem("calculator", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CALCULATOR_DATA_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const createCalculator = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_CALCULATOR_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`/api/v1/calculators`, {}, config);

    dispatch({ type: CREATE_CALCULATOR_SUCCESS, payload: data });

    localStorage.setItem("calculator", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CREATE_CALCULATOR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response && error.response.data
          ? error.response.data.error
          : error.message,
    });
  }
};

export const updateCalculatorData =
  (id, fields) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_CALCULATOR_REQUEST });
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
        `/api/v1/calculators/${id}`,
        fields,
        config
      );
      dispatch({ type: UPDATE_CALCULATOR_SUCCESS, payload: data });

      localStorage.setItem("calculator", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: UPDATE_CALCULATOR_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response && error.response.data
            ? error.response.data.error
            : error.message,
      });
    }
  };

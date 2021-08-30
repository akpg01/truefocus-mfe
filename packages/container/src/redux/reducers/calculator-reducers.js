import {
  CALCULATOR_DATA_FETCH_FAIL,
  CALCULATOR_DATA_FETCH_REQUEST,
  CALCULATOR_DATA_FETCH_SUCCESS,
  CALCULATOR_DATA_FETCH_RESET,
  UPDATE_CALCULATOR_FAIL,
  UPDATE_CALCULATOR_REQUEST,
  UPDATE_CALCULATOR_SUCCESS,
  CREATE_CALCULATOR_FAIL,
  CREATE_CALCULATOR_REQUEST,
  CREATE_CALCULATOR_SUCCESS,
  CREATE_CALCULATOR_RESET,
} from "../constants/calculatorConstants";

export const getcalculatorReducers = (state = {}, action) => {
  switch (action.type) {
    case CALCULATOR_DATA_FETCH_REQUEST:
      return { ...state, loading: true };
    case CALCULATOR_DATA_FETCH_SUCCESS:
      return { ...state, loading: false, calculator: action.payload };
    case CALCULATOR_DATA_FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };
    case CALCULATOR_DATA_FETCH_RESET:
      return {};
    default:
      return state;
  }
};

export const createCalculatorReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CALCULATOR_REQUEST:
      return { ...state, loading: true };
    case CREATE_CALCULATOR_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        calculator: action.payload,
      };
    case CREATE_CALCULATOR_FAIL:
      return { ...state, loading: false, error: action.payload };
    case CREATE_CALCULATOR_RESET:
      return {};
    default:
      return state;
  }
};

export const updateCalculatorReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CALCULATOR_REQUEST:
      return { ...state, loading: true };
    case UPDATE_CALCULATOR_SUCCESS:
      return { ...state, loading: false, calculator: action.payload };
    case UPDATE_CALCULATOR_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

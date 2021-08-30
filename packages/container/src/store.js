import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { loginReducers } from "./redux/reducers/auth-reducers";

const reducer = combineReducers({ userLogin: loginReducers });

const userInfoFronStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFronStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

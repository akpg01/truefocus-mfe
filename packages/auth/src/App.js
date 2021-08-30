import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import Login from "./components/index";
import ForgotPassword from "./components/forgot-password";
import ActivateAccount from "./components/activate-account";
import ChangePassword from "./components/change-password";
import ResetPassword from "./components/reset-password";
import UpdateProfile from "./components/update-profile";

import "./sass/App.scss";

export default ({ history, onSignIn }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/auth/activate" component={ActivateAccount} />
          <Route path="/auth/resetpswd" component={ResetPassword} />
          <Route path="/auth/forgotpswd" component={ForgotPassword} />
          <Route path="/auth/changepswd">
            <ChangePassword onSignIn={onSignIn} />{" "}
          </Route>
          <Route path="/auth/update-profile">
            <UpdateProfile onSignIn={onSignIn} />
          </Route>
          <Route path="/">
            <Login onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

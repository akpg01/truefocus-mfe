import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import Login from "./components/index";

import "./sass/App.scss";

export default ({ history, onSignIn }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/">
            <Login onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Login from "./components/index";

import "./sass/App.scss";

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

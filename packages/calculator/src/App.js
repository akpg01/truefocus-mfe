import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./components";

import "./sass/App.scss";

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

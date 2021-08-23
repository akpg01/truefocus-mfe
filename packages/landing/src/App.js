import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Landing from "./components/landing";

import "./sass/App.scss";

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

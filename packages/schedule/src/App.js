import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./components";
import Day from "./components/calendar-day";
import Week from "./components/calendar-week";

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

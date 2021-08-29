import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/dashboard";
import Calculator from "./components/calculator";
import Schedule from "./components/schedule";
import Availability from "./components/availability";
import Projects from "./components/projects";

import "./sass/App.scss";

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/availability" component={Availability} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

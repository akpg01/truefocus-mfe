import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Signin from "./components/signin";
import Signup from "./components/signup";
import Home from "./components";

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

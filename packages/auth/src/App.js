import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Signin from "./components/signin";
import Signup from "./components/signup";

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/auth/signin" component={Signin} />
          <Route path="/auth/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

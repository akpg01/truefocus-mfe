import React, { useState, lazy, Suspense, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Spinner from "./components/ui-elements/spinner";

const LandingLazy = lazy(() => import("./components/landing-app"));
const AuthLazy = lazy(() => import("./components/auth-app"));
const AvailabilityLazy = lazy(() => import("./components/availability-app"));
const GoalsLazy = lazy(() => import("./components/goals-app"));
const PomodoroLazy = lazy(() => import("./components/pomodoro-app"));
const ProjectsLazy = lazy(() => import("./components/projects-app"));
const ScheduleLazy = lazy(() => import("./components/schedule-app"));
const StatsLazy = lazy(() => import("./components/stats-app"));
const CalculatorLazy = lazy(() => import("./components/calculator-app"));
const TodosLazy = lazy(() => import("./components/todos-app"));
const DashboardLazy = lazy(() => import("./components/dashboard-app"));

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

import "./sass/App.scss";

export default () => {
  // pass in user object (issignedIn; therefore, and assertain user role (i.e. admin, subscriber))
  // --- get user details from DB
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={<Spinner />}>
            <Header
              onSignOut={() => setIsSignedIn(false)}
              isSignedIn={isSignedIn}
            />
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/availability" component={AvailabilityLazy} />
              <Route path="/goals" component={GoalsLazy} />
              <Route path="/pomodoro" component={PomodoroLazy} />
              <Route path="/projects" component={ProjectsLazy} />
              <Route path="/schedule" component={ScheduleLazy} />
              <Route path="/stats" component={StatsLazy} />
              <Route path="/calculator" component={CalculatorLazy} />
              <Route path="/todos" component={TodosLazy} />
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/auth/login" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={LandingLazy} />
            </Switch>
            <Footer />
          </Suspense>
        </Router>
      </Provider>
    </>
  );
};

import React, { lazy, Suspense, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import ProgressBar from "./components/ui-elements/progress-bar";

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
  return (
    <>
      <Router history={history}>
        <Header />
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path="/auth" component={AuthLazy} />
            <Route path="/availability" component={AvailabilityLazy} />
            <Route path="/goals" component={GoalsLazy} />
            <Route path="/pomodoro" component={PomodoroLazy} />
            <Route path="/projects" component={ProjectsLazy} />
            <Route path="/schedule" component={ScheduleLazy} />
            <Route path="/stats" component={StatsLazy} />
            <Route path="/calculator" component={CalculatorLazy} />
            <Route path="/todos" component={TodosLazy} />
            <Route exact path="/dashboard" component={DashboardLazy} />
            <Route path="/" component={LandingLazy} />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
};

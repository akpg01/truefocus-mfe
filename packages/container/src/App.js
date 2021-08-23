import React from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import LandingApp from "./components/landing-app";
// import AuthApp from "./components/auth-app";
// import Availability from "./components/availability-app";
// import Goals from "./components/goals-app";
// import Pomodoro from "./components/pomodoro-app";
// import Projects from "./components/projects-app";
// import Schedule from "./components/schedule-app";
// import Stats from "./components/stats-app";
// import Calculator from "./components/calculator-app";
// import TodoList from "./components/todos-app";

import Header from "./components/navbar";
import Footer from "./components/footer";

import "./sass/App.scss";

export default () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <LandingApp />
        <Footer />
      </BrowserRouter>
    </>
  );
};

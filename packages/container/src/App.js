import React from "react";
import LandingApp from "./components/landing-app";
import AuthApp from "./components/auth-app";
import Availability from "./components/availability-app";
import Goals from "./components/goals-app";
import Pomodoro from "./components/pomodoro-app";
import Projects from "./components/projects-app";
import Schedule from "./components/schedule-app";
import Stats from "./components/stats-app";
import Calculator from "./components/time-calculator-app";
import TodoList from "./components/todo-list-app";

export default () => {
  return (
    <>
      <h1>Hi from the container!</h1>
      <hr />
      <LandingApp />
      <AuthApp />
      <Availability />
      <Goals />
      <Pomodoro />
      <Projects />
      <Schedule />
      <Stats />
      <Calculator />
      <TodoList />
    </>
  );
};

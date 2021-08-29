import React from "react";

import Calculator from "./calculator";
import Availability from "./availability";
import Projects from "./projects";
import Schedule from "./schedule";
import Review from "./review";
import Submit from "./submit";

import useStep from "../helpers/useStep";
import Layout from "../helpers/layout";

const steps = [
  { id: "calculator", completed: false },
  { id: "availability", completed: false },
  { id: "projects", completed: false },
  { id: "schedule", completed: false },
  { id: "review", completed: false },
  { id: "submit", completed: false },
];

const defaultDaata = {
  calculator: [],
  available: [],
  projects: [],
  schedule: [],
};

export default () => {
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  switch (id) {
    case "calculator":
      return (
        <Layout menu="I am the menu" steps={steps}>
          <Calculator navigation={navigation} />
        </Layout>
      );
    case "availability":
      return (
        <Layout menu={"I am menu"} steps={steps}>
          <Availability navigation={navigation} />
        </Layout>
      );
    case "projects":
      return (
        <Layout menu={"I am menu"} steps={steps}>
          <Projects navigation={navigation} />
        </Layout>
      );
    case "schedule":
      return (
        <Layout menu={"I am menu"} steps={steps}>
          <Schedule navigation={navigation} />
        </Layout>
      );
    case "review":
      return (
        <Layout menu={"I am menu"} steps={steps}>
          <Review navigation={navigation} />
        </Layout>
      );
    case "submit":
      return (
        <Layout menu={"I am menu"} steps={steps}>
          <Submit navigation={navigation} />
        </Layout>
      );
    default:
      return <div>Page Not Found</div>;
  }
};

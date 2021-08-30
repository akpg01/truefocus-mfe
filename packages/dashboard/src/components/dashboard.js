import React from "react";

import Calculator from "./calculator";
import Availability from "./availability";
import Projects from "./projects";
import Schedule from "./plan";
import Review from "./review";
import Submit from "./submit";

import useStep from "../helpers/useStep";
import useForm from "../helpers/useForm";
import Layout from "../helpers/layout";

const steps = [
  { id: "calculator", completed: false },
  { id: "availability", completed: false },
  { id: "projects", completed: false },
  { id: "review", completed: false },
  { id: "submit", completed: false },
];

const defaultData = {
  calculator: [],
  available: [],
  projects: [],
  schedule: [],
};

export default () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  console.log(formData);

  const props = { formData, setForm, navigation };

  switch (id) {
    case "calculator":
      return (
        <Layout menu="I am the menu" steps={steps}>
          <Calculator {...props} />
        </Layout>
      );
    case "availability":
      return (
        <Layout menu={"I am menu"} steps={steps}>
          <Availability {...props} />
        </Layout>
      );
    case "projects":
      return (
        <Layout menu={"I am menu"} steps={steps}>
          <Projects {...props} />
        </Layout>
      );
    case "schedule":
      return (
        <Layout menu={"I am menu"} steps={steps}>
          <Schedule {...props} />
        </Layout>
      );
    case "review":
      return (
        <Layout menu={"I am menu"} steps={steps}>
          <Review {...props} />
        </Layout>
      );
    case "submit":
      return (
        <Layout menu={"I am menu"} steps={steps}>
          <Submit {...props} />
        </Layout>
      );
    default:
      return <div>Page Not Found</div>;
  }
};

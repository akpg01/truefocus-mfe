import React, { useState, useEffect } from "react";

export default ({ initialStep, steps }) => {
  const [theSteps, setTheSteps] = useState(steps);
  const [initStep, setInitStep] = useState(initialStep || 0);
  const [step, setStep] = useState(steps[initialStep]);

  useEffect(() => {
    setStep(theSteps[initStep]);
    setTheSteps(theSteps);
  }, [initStep, theSteps]);

  const next = () => {
    if (initStep < theSteps.length) {
      if (initStep + 1 < theSteps.length) {
        setInitStep(initStep + 1);
      }
      theSteps[initStep].completed = true;
      //setTheSteps(theSteps);
    }
  };

  const previous = () => {
    if (initStep - 1 >= 0) {
      setInitStep(initStep - 1);
      if (initStep <= 1) {
        theSteps[0].completed = false;
      }
      theSteps[initStep - 1].completed = false;
      setTheSteps(theSteps);
    }
  };

  return { step, navigation: { previous, next } };
};

import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

// Library creation
library.add(fas, fab);

export default () => {
  const [numberOfSteps] = useState(2);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState({ 0: "", 1: "", 2: "" });
  const [step_0, setStep0] = useState("");
  const [step_1, setStep1] = useState("");
  const [step_2, setStep2] = useState("");

  const onPrevious = () => {
    if (step - 1 === 0) {
      setStep0("");
    } else if (step - 1 === 1) {
      setStep1("");
    } else if (step - 1 === 2) {
      setStep2("");
    }
    setStep(step - 1);
  };

  const onNext = () => {
    if (step === 0) {
      setStep0("completed");
    } else if (step === 1) {
      setStep1("completed");
    } else if (step === 2) {
      setStep2("completed");
    }
    setStep(step + 1);
  };
  return (
    <>
      <Helmet>
        <title>Dashboard | TrueFocus</title>
      </Helmet>
      <div className="section">
        <div className="progressBar-section">
          <div id="progressBar">
            <div className="step">
              <p className={`text ${step_0}`}>Time Calculator</p>
              <div className={`circle ${step_0}`}>
                {step_0 !== "" ? (
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    className={`check ${step_0}`}
                  />
                ) : (
                  <span>1</span>
                )}
              </div>
            </div>
          </div>
          <div id="progressBar">
            <div className="step">
              <p className={`text ${step_1}`}>Projects</p>
              <div className={`circle ${step_1}`}>
                {step_1 !== "" ? (
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    className={`check ${step_1}`}
                  />
                ) : (
                  <span>2</span>
                )}
              </div>
            </div>
          </div>
          <div id="progressBar">
            <div className="step">
              <p className={`text ${step_2}`}>Availability</p>
              <div className={`circle ${step_2}`}>
                {step_2 !== "" ? (
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    className={`check ${step_2}`}
                  />
                ) : (
                  <span>3</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <h4>Comonents go heere!!!</h4>
        {/* {step === 0 ? <Calculator /> : null}
        {step === 1 ? <Projects /> : null}
        {step === 2 ? <Available /> : null} */}
      </div>
      <div className="button section">
        <button
          id="back"
          style={{ display: step <= 0 ? "none" : "inline" }}
          onClick={onPrevious}
        >
          Back
        </button>
        <button
          id="next"
          style={{ display: step === numberOfSteps ? "none" : "inline" }}
          onClick={onNext}
        >
          Next
        </button>
        <button
          id="submit"
          style={{ display: step === numberOfSteps ? "inline" : "none" }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

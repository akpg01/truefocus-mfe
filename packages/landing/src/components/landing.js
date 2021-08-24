import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Features from "../components/layout/features";
import Contact from "../components/layout/contact";

// Library creation
library.add(fas, fab);

export default () => {
  return (
    <>
      <div className="heading">
        <div className="brand">
          <Link to="/">
            <div className="brand-logo">
              <div className="logo">
                <FontAwesomeIcon icon={["fas", "glasses"]} aria-hidden="true" />
              </div>
              <div>
                <div className="companyname">TrueFocus</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="heading__banner">
          <div className="heading__lead-group">
            <p className="lead left">Goodbye, procrastination!</p>
            <p className="lead">Hello, time management!</p>
          </div>
          <div className="heading__cta-btns">
            <div className="heading__button-group">
              <Link to="/auth/login">
                <button className="btn heading__btn">LOGIN</button>
              </Link>
              <div className="heading__cta-signup">
                <p className="heading__cta-description">
                  Don't have an account?
                </p>
                <Link to="/auth/login" className="heading__signup">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Contact />
    </>
  );
};

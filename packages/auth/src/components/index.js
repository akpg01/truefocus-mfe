import React from "react";
import { Helmet } from "react-helmet";

export default ({ onSignIn }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    onSignIn();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    onSignIn();
  };

  return (
    <>
      <Helmet>
        <title>Welcome | TrueFocus</title>
      </Helmet>
      <div className="content">
        <div className="forms-wrapper">
          <input type="checkbox" id="show-form" hidden />
          <div className="show-btns-wrapper">
            <label
              htmlFor="show-form"
              className="show-form-btn show-signup-form"
            >
              Sign Up
            </label>
            <label
              htmlFor="show-form"
              className="show-form-btn show-login-form"
            >
              Log In
            </label>
          </div>

          <form action="/#" className="signup-form">
            <h3 className="form-heading">Sign Up</h3>
            <div className="fullname-inputs-wrapper">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" className="form-input" placeholder="Username" />
            <input
              type="email"
              className="form-input"
              placeholder="Email Address"
            />
            <input
              type="password"
              className="form-input"
              placeholder="Password"
            />
            <input
              type="submit"
              className="form-btn"
              value="SIGN UP"
              onClick={handleLogin}
            />
          </form>

          <form action="" className="login-form">
            <h3 className="form-heading">Log In</h3>
            <input
              type="email"
              className="form-input"
              placeholder="Email Address"
            />
            <input
              type="password"
              className="form-input"
              placeholder="Password"
            />
            <input
              type="submit"
              className="form-btn"
              value="LOG IN"
              onClick={handleSignUp}
            />
          </form>
        </div>
      </div>
    </>
  );
};

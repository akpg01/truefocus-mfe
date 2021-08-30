import React from "react";
import { Link } from "react-router-dom";

export default ({ onSignIn }) => {
  return (
    <>
      <div className="content">
        <div className="forms-wrapper">
          <input type="checkbox" id="show-form" hidden />
          <form action="" className="forgot-form">
            <h3 className="form-heading">Forgot Password</h3>
            <input
              type="email"
              className="form-input"
              placeholder="Email Address"
            />
            <input type="submit" className="form-btn" value="SUBMIT" />
          </form>
          <div className="forgotpswd">
            <Link to="/auth/login">
              <span>Return to Login</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

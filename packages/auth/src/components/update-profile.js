import React from "react";
import { Link } from "react-router-dom";

export default ({ onSignIn }) => {
  return (
    <>
      <div className="content">
        <div className="forms-wrapper">
          <input type="checkbox" id="show-form" hidden />
          <form action="" className="forgot-form">
            <h3 className="form-heading">Update Profile</h3>
            <input
              type="text"
              name="first-name"
              className="form-input"
              placeholder="First name"
            />
            <input
              type="text"
              name="last-name"
              className="form-input"
              placeholder="Last name"
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
            />
            <input type="submit" className="form-btn" value="SUBMIT" />

            <div className="forgotpswd">
              <Link to="/auth/changepswd">
                <span>Change password?</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

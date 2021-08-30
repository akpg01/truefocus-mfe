import React from "react";
import { Link } from "react-router-dom";

export default ({ onSignIn }) => {
  return (
    <>
      <div className="content">
        <div className="forms-wrapper">
          <input type="checkbox" id="show-form" hidden />
          <form action="" className="forgot-form">
            <h3 className="form-heading">Change Password</h3>
            <input
              type="password"
              name="current-pswd"
              className="form-input"
              placeholder="Current password"
            />
            <input
              type="password"
              name="new-pswd"
              className="form-input"
              placeholder="New password"
            />
            <input
              type="password"
              name="confirm-pswd"
              className="form-input"
              placeholder="Confirm password"
            />
            <input type="submit" className="form-btn" value="SUBMIT" />

            <div className="forgotpswd">
              <Link to="/auth/update-profile">
                <span>Update profile?</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

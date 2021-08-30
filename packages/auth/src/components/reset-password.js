import React from "react";

export default ({ onSignIn }) => {
  return (
    <>
      <div className="content">
        <div className="forms-wrapper">
          <input type="checkbox" id="show-form" hidden />
          <form action="" className="forgot-form">
            <h3 className="form-heading">Reset Password</h3>
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
          </form>
        </div>
      </div>
    </>
  );
};

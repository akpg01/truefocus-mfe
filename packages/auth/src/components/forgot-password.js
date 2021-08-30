import React from "react";

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
        </div>
      </div>
    </>
  );
};

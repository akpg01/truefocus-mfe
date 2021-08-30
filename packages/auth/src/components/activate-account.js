import React from "react";

export default ({ onSignIn }) => {
  return (
    <>
      <div className="content">
        <div className="forms-wrapper">
          <input type="checkbox" id="show-form" hidden />
          <form action="" className="activate-form">
            <h3 className="form-heading">Activate Your Account</h3>
            <div className="forms-message">
              <h3>Click the button below to activate your account.</h3>
            </div>
            <input type="submit" className="form-btn" value="ACTIVATE" />
          </form>
        </div>
      </div>
    </>
  );
};

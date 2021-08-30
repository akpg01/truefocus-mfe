import React from "react";

export default ({ msg }) => {
  return (
    <>
      <div className="content">
        <div className="forms-wrapper">
          <input type="checkbox" id="show-form" hidden />
          <form action="" className="activate-form">
            <h3 className="form-heading">Check Your Email</h3>
            <div className="forms-message">
              <h3>{msg}</h3>
              <p>please check your email.</p>
            </div>
            <input type="submit" className="form-btn" value="ACTIVATE" />
          </form>
        </div>
      </div>
    </>
  );
};

import React from "react";

export default ({ menu, children, steps }) => {
  return (
    <div className="multi-form-layout">
      <div className="multi-form-progress">
        {steps.map((e, i) => {
          return (
            <div className="multi-form-progress-step" key={i}>
              <div className={`step ${e.completed ? "completed" : ""}`}>
                <p className={`title ${e.completed ? "completed" : ""}`}>
                  {e.id}
                </p>
                <span className={`circle ${e.completed ? "completed" : ""}`}>
                  {e.completed ? null : i + 1}
                </span>
              </div>
              {i !== steps.length - 1 ? (
                <span
                  className={`line ${e.completed ? "completed" : ""}`}
                ></span>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="multi-form-wrapper">
        <div className="multi-form-wrapper sidebar">{menu}</div>
        <div className="multi-form-wrapper content">{children}</div>
      </div>
    </div>
  );
};

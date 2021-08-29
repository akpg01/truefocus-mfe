import React from "react";

export default ({ navigation }) => {
  const { next } = navigation;
  return (
    <div className="multi-page-form form">
      <h4>Calculator</h4>
      <div className="mult-page-form button">
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

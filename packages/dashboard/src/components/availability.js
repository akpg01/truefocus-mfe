import React from "react";

export default ({ navigation }) => {
  const { previous, next } = navigation;
  return (
    <div className="multi-page-form form">
      <h4>Availability</h4>
      <div className="mult-page-form button">
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

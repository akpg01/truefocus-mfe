import React from "react";

export default ({ navigation }) => {
  const { previous, next } = navigation;
  return (
    <div className="multi-page-form form">
      <h4>Review</h4>
      <div className="multi-page-form button">
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

import React from "react";

const LikelihoodDisplay = ({ likelihood }) => {
  const getColor = (value) => {
    if (value < 25) return "red";
    if (value < 50) return "yellow";
    return "green";
  };

  return (
    <div style={{ marginTop: "20px", color: getColor(likelihood) }}>
      <h4>Likelihood of Survival:</h4>
      <strong>{likelihood}%</strong>
    </div>
  );
};

export default LikelihoodDisplay;

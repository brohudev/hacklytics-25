import React from "react";

const LikelihoodDisplay = ({ likelihood }) => {
  const getColor = (value) => {
    if (value <= 25) return "red";
    if (value <= 50) return "yellow";
    return "green";
  };

  return (
    <div >
      Likelihood of Survival: {likelihood}%
    </div>
  );
};

export default LikelihoodDisplay;

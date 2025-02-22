import React from "react";

const InputForm = ({ onInputChange }) => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <h3>Input Form</h3>
      <form>
        <label>
          Age:
          <input type="number" name="age" onChange={onInputChange} />
        </label>
        <br />
        <label>
          Tumor Size:
          <input type="number" name="tumorSize" onChange={onInputChange} />
        </label>
        <br />
        {/* Add more form fields as needed */}
      </form>
    </div>
  );
};

export default InputForm;

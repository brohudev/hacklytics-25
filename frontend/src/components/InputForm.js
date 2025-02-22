import React from "react";

const InputForm = ({ onInputChange }) => {
  return (
    <div >
      <h3>Input Form</h3>
      <form>
        <label>
          Age:
          <input type="number" name="age" onChange={onInputChange} />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" onChange={onInputChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label>
          Tumor Stage:
          <input type="text" name="tumorStage" onChange={onInputChange} />
        </label>
        <br />
        <label>
          Histology:
          <input type="text" name="histology" onChange={onInputChange} />
        </label>
        <br />
        <label>
          ER Status:
          <select name="erStatus" onChange={onInputChange}>
            <option value="">Select</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
          </select>
        </label>
        <br />
        <label>
          PR Status:
          <select name="prStatus" onChange={onInputChange}>
            <option value="">Select</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
          </select>
        </label>
        <br />
        <label>
          HER2 Status:
          <select name="her2Status" onChange={onInputChange}>
            <option value="">Select</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
          </select>
        </label>
        <br />
        <label>
          Date of Surgery:
          <input type="date" name="dateOfSurgery" onChange={onInputChange} />
        </label>
      </form>
    </div>
  );
};

export default InputForm;

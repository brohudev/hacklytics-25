import React, { useState } from "react";
import '../styles.css';

const LeftSection = () => {
  const [formData, setFormData] = useState({
      Age: "",
      Gender: "",
      Protein1: "",
      Protein2: "",
      Protein3: "",
      Protein4: "",
      Tumour_Stage: "",
      Histology: "",
      ER_Status: "",
      PR_Status: "",
      HER2_Status: "",
      Surgery_Type: "",
      Date_of_Surgery: new Date(),
      Date_of_Last_Visit: new Date(),

  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Sending request to Flask...");
      const formattedData = {
          ...formData,
          Age: Number(formData.Age),
          Gender: formData.Gender === "male" ? 1 : 0,
          Protein1: parseFloat(formData.Protein1),
          Protein2: parseFloat(formData.Protein2),
          Protein3: parseFloat(formData.Protein3),
          Protein4: parseFloat(formData.Protein4),
          Histology: formData.Histology === "Infiltrating Lobular Carcinoma" ? 1 : formData.Histology === "Mucinous Carcinoma" ? 2 : 3,
          ER_Status: formData.ER_Status === "positive" ? 1 : 0,
          PR_Status: formData.PR_Status === "positive" ? 1 : 0,
          HER2_Status: formData.HER2_Status === "positive" ? 1 : 0,
          Surgery_Type: formData.Surgery_Type === "Other" ? 1 : formData.Surgery_Type === "Modified Radical Mastectomy" ? 2 : formData.Surgery_Type === "Lumpectomy" ? 3 : 4,
          Days_Difference: Math.ceil(
            (new Date(formData.Date_of_Last_Visit) - new Date(formData.Date_of_Surgery)) / (1000 * 60 * 60 * 24)
          )
      };
      delete formattedData.Date_of_Surgery;
      delete formattedData.Date_of_Last_Visit;

      try {
          const response = await fetch("http://127.0.0.1:5000/predict", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ features: Object.values(formattedData) })
          });
          const data = await response.json();
          setPrediction(data.predicted_y);
      } catch (error) {
          console.error("Error fetching prediction:", error);
      }
  };

  return (
      <div className="left-section">
          {renderInputForm(formData, handleChange, handleSubmit)}
          {displaySurvivalLikelihood(prediction)}
      </div>
  );
};

export default LeftSection;

function displaySurvivalLikelihood(prediction) {
     let backgroundColor = '';
     let textColor = '';
     const predictionText = Array.isArray(prediction) ? prediction[0] : prediction;
     if (predictionText === 'Alive') {
          backgroundColor = 'lightgreen';
          textColor = 'green';
     } else if (predictionText === "Dead") {
          backgroundColor = 'lightcoral';
          textColor = 'red';
     } else {
          backgroundColor = 'lightyellow';
          textColor = 'orange';
     }

     return <div className="likelihood" style={{ backgroundColor, color: textColor }}>
          Likely Patient Status: {prediction}
     </div>;
}

function renderInputForm(formData, handleChange, handleSubmit) {
  return (
    <div className="input-form">
      <h2>Input</h2>
      <form onSubmit={handleSubmit}>
          <label>
              Age:
              <input type="number" name="Age" value={formData.Age} onChange={handleChange} required />
          </label>
          <label>
              Gender:
              <select name="Gender" value={formData.Gender} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
              </select>
          </label>
          <label>
              Protein1:
              <input type="number" step="0.01" name="Protein1" value={formData.Protein1} onChange={handleChange} required />
          </label>
          <label>
              Protein2:
              <input type="number" step="0.01" name="Protein2" value={formData.Protein2} onChange={handleChange} required />
          </label>
          <label>
              Protein3:
              <input type="number" step="0.01" name="Protein3" value={formData.Protein3} onChange={handleChange} required />
          </label>
          <label>
              Protein4:
              <input type="number" step="0.01" name="Protein4" value={formData.Protein4} onChange={handleChange} required />
          </label>
          <label>
              Tumour Stage:
              <input type="number" name="Tumour_Stage" value={formData.Tumour_Stage} onChange={handleChange} required />
          </label>
          <label>
              Histology:
              <input type="text" name="Histology" value={formData.Histology} onChange={handleChange} required />
          </label>
          <label>
              ER Status:
              <select name="ER_Status" value={formData.ER_Status} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="positive">Positive</option>
                  <option value="negative">Negative</option>
              </select>
          </label>
          <label>
              PR Status:
              <select name="PR_Status" value={formData.PR_Status} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="positive">Positive</option>
                  <option value="negative">Negative</option>
              </select>
          </label>
          <label>
              HER2 Status:
              <select name="HER2_Status" value={formData.HER2_Status} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="positive">Positive</option>
                  <option value="negative">Negative</option>
              </select>
          </label>
          <label>
              Surgery Type:
              <input type="text" name="Surgery_Type" value={formData.Surgery_Type} onChange={handleChange} required />
          </label>
          <label>
              Date of Surgery:
              <input type="date" name="Date_of_Surgery" value={formData.Date_of_Surgery} onChange={handleChange} required />
          </label>
          <label>
              Date of Last Visit:
              <input type="date" name="Date_of_Last_Visit" value={formData.Date_of_Last_Visit} onChange={handleChange} required />
          </label>
          <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}


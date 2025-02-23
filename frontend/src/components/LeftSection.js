import React from "react";
import '../styles.css';

const LeftSection = () => {
  return (<div className="left-section">
       {renderInputForm()}

{/* Likelihood Section */}
       {displaySurvivalLikelihood()}
</div>);
}

export default LeftSection;

function displaySurvivalLikelihood() {
     const likelihood = 70; // Example likelihood value
     let backgroundColor = '';
     let textColor = '';

     if (likelihood >= 75) {
          backgroundColor = 'lightgreen';
          textColor = 'green';
     } else if (likelihood >= 50) {
          backgroundColor = 'lightyellow';
          textColor = 'orange';
     } else {
          backgroundColor = 'lightcoral';
          textColor = 'red';
     }

     return <div className="likelihood" style={{ backgroundColor, color: textColor }}>
          Likelihood of Survival: {likelihood}%
     </div>;
}

function renderInputForm() {
     return <div className="input-form">
     <h2>Input</h2>
     <form>
       <label>
         Age:
         <input type="number" />
       </label>
       <label>
         Gender:
         <select>
           <option value="">Select</option>
           <option value="male">Male</option>
           <option value="female">Female</option>
         </select>
       </label>
       <label>
         Tumor Stage:
         <input type="text" />
       </label>
       <label>
         Histology:
         <input type="text" />
       </label>
       <label>
         ER Status:
         <select>
           <option value="">Select</option>
           <option value="positive">Positive</option>
           <option value="negative">Negative</option>
         </select>
       </label>
       <label>
         PR Status:
         <select>
           <option value="">Select</option>
           <option value="positive">Positive</option>
           <option value="negative">Negative</option>
         </select>
       </label>
       <label>
         HER2 Status:
         <select>
           <option value="">Select</option>
           <option value="positive">Positive</option>
           <option value="negative">Negative</option>
         </select>
       </label>
       <label>
         Date of Surgery:
         <input type="date" />
       </label>
     </form>
   </div>;
}


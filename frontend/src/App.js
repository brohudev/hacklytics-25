import React, { useState } from "react";
import InputForm from "./components/InputForm";
import LikelihoodDisplay from "./components/LikelihoodDisplay";
import DashboardCharts from "./components/DashboardCharts";

const App = () => {
  const [formData, setFormData] = useState({});
  const [likelihood, setLikelihood] = useState(70); // Example likelihood value

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Example logic to update likelihood based on input
    if (name === "age") {
      setLikelihood(100 - value); // Replace with actual logic
    }
  };

  const chartData = [
    { name: "Age Group", value: Math.random() * 100 },
    { name: "Tumor Size", value: Math.random() * 100 },
    { name: "Histology", value: Math.random() * 100 },
    { name: "Grade", value: Math.random() * 100 },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "40% 60%", gap: "10px", padding: "20px" }}>
      {/* Left Section */}
      <div>
        <InputForm onInputChange={handleInputChange} />
        <LikelihoodDisplay likelihood={likelihood} />
      </div>

      {/* Right Section */}
      <DashboardCharts chartData={chartData} />
    </div>
  );
};

export default App;

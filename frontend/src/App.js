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

  const newData = [
    { age: 18, risk: 0.2 },
    { age: 24, risk: 0.3 },
    { age: 35, risk: 0.5 },
    { age: 45, risk: 0.4 },
    { age: 60, risk: 0.7 }
  ];

  return (
    <div className="h-full">
      {/* Left Section */}
      <div className="w-1/2 p-4">
        <InputForm onInputChange={handleInputChange} />
        <LikelihoodDisplay likelihood={likelihood} />
      </div>

      {/* Right Section */}
      <DashboardCharts chartData={newData} pieData={chartData} title="Risk vs Age Chart"/>
    </div>
  );
};

export default App;

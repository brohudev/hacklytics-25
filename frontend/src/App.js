import React from "react";
import LeftSection from "./components/LeftSection";
import DashboardCharts from "./components/DashboardCharts";
import "./styles.css";



export const App = () => {


  return (
    <div className="dashboard">
      {/* Left Section */}
      <LeftSection />

      {/* Right Section - Charts */}
      <div className="right-section">
      <DashboardCharts className="chart" title="Risk vs Age Chart"/>
      </div>
    </div>
  );
};

export default App;
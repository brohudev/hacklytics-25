import React from "react";
import Chart from "./Chart";

const DashboardCharts = ({ chartData }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
      {/* Render charts */}
      <Chart type="bar" data={chartData} />
      <Chart type="bar" data={chartData} />
      <Chart type="pie" data={chartData} />
      <Chart type="bar" data={chartData} />
    </div>
  );
};

export default DashboardCharts;

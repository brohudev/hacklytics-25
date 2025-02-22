import React from "react";
import Chart from "./Chart";

const DashboardCharts = ({ chartData, pieData, title }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
      {/* Render charts */}
      <Chart type="bar" data={chartData} title={title}/>
      <Chart type="bar" data={chartData} title={title}/>
      <Chart type="pie" data={pieData} title={title}/>
      <Chart type="bar" data={chartData} title={title}/>
    </div>
  );
};

export default DashboardCharts;

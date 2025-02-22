import React from "react";
import Chart from "./Chart";

const DashboardCharts = ({ chartData }) => {
  return (
    <div>
      {/* Render charts */}
      <Chart type="bar" data={chartData} />
      <Chart type="bar" data={chartData} />
      <Chart type="pie" data={chartData} />
      <Chart type="bar" data={chartData} />
    </div>
  );
};

export default DashboardCharts;

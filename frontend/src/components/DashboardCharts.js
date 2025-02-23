import React from "react";
import Chart from "./Chart";
import "../styles.css";

const DashboardCharts = ({ title }) => {
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
    <>
      {/* Render charts */}
      <Chart className="chart" type="bar" data={newData} title={title}/>
      <Chart className="chart" type="bar" data={newData} title={title}/>
      <Chart className="chart" type="pie" data={chartData} title={title}/>
      <Chart className="chart" type="bar" data={newData} title={title}/>
    </>
  );
};

export default DashboardCharts;

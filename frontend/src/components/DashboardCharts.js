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

  const tumourData = [
    { name: "Stage 1", value: 0.192 },
    { name: "Stage 2", value: 0.566 },
    { name: "Stage 3", value: 0.242 }
  ];

  /* dead = 0, alive = 1 */
  const statusAD = [
    {name: "Dead", value: 0.206 },
    {name: "Alive", value: 0.794 }
  ];

  const surgeryData = [
    { stage: "Stage 1", ModifiedRadicalMastectomy: .125, Lumpectomy: .344, SimpleMastectomy: .219, Other: .312 },
    { stage: "Stage 2", ModifiedRadicalMastectomy: .259, Lumpectomy: .19, SimpleMastectomy: .228, Other: .323 },
    { stage: "Stage 3", ModifiedRadicalMastectomy: .481, Lumpectomy: .099, SimpleMastectomy: .123, Other: .296 },
  ];

  const surgeryTypeDeadAlive = [
    { surgery: "Lumpectomy", Dead: .136, Alive: .864 },
    { surgery: "SimpleMastectomy", Dead: .255, Alive: .745 },
    { surgery: "RadicalMastectomy", Dead: .217, Alive: .783 },
    { surgery: "Other", Dead: .185, Alive: .815 },
  ];

  return (
    <>
      {/* Render charts */}
      <div className="grid"> 
        <Chart className="chart" type="bar2" data={surgeryData} title={title}/>
        <Chart className="chart" type="pie2" data={statusAD} title={title}/>
        <Chart className="chart" type="pie" data={tumourData} title={title}/>
        <Chart className="chart" type="bar3" data={surgeryTypeDeadAlive} title={title}/>
      </div>
    </>
  );
};

export default DashboardCharts;

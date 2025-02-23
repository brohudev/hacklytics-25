import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Helper function to create age ranges
const formatAgeRange = (age) => {
  if (age >= 0 && age <= 18) return "0-18";
  if (age >= 19 && age <= 25) return "19-25";
  if (age >= 26 && age <= 35) return "26-35";
  if (age >= 36 && age <= 45) return "36-45";
  if (age >= 46 && age <= 60) return "46-60";
  return "60+"; // For ages above 60
};

const Chart = ({ type, data, title }) => {
  if (type === "bar") {
    return (
      <BarChart width={400} height={300} data={data} title={title} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="age" 
          label={{ value: 'Age', position: 'bottom' }} 
          tickFormatter={formatAgeRange} // Format age into ranges
        />
        <YAxis label={{ value: 'Risk', angle: -90, position: 'insideLeft' }} />

        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="risk" fill="#8884d8"/>
      </BarChart>
    );
  }

  if (type === "bar2") {
    return (
      <div>
      <h1>Surgery Type Percentages Across Stages</h1>
      <BarChart width={700} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stage" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Lumpectomy" fill="#82ca9d" />
        <Bar dataKey="SimpleMastectomy" fill="#ffc658" />
        <Bar dataKey="ModifiedRadicalMastectomy" fill="#8884d8" />
        <Bar dataKey="Other" fill="#ff7300" />
      </BarChart>
      </div>
    );
  }

  if (type === "bar3") {
    return (
      <div>
      <h1>Surgery Type and Survival Outcome</h1>
      <BarChart width={700} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="surgery" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Dead" fill="#8884d8" />
        <Bar dataKey="Alive" fill="#82ca9d" />
      </BarChart>
      </div>
    );
  }

  if (type === "pie") {
    return (
      <div>
      <h1>Tumour Stage Distribution</h1>
      <PieChart width={700} height={400}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={150}
          fill="#82ca9d"
          label={(entry) => entry.name}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index]} />
          ))}
        </Pie>
      </PieChart>
      </div>
    );
  }

  if (type === "pie2") {
    return (
      <div>
      <h1>Survival Percentage</h1>
      <PieChart width={700} height={400}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={150}
          fill="#82ca9d"
          label={(entry) => entry.name}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index]} />
          ))}
        </Pie>
      </PieChart>
      </div>
    );
  }

  return null;
};

export default Chart;

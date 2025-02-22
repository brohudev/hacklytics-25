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
  Label,
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
      <BarChart width={300} height={200} data={data} title={title} >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis 
          dataKey="age" 
          label={{ value: 'Age', position: 'bottom' }} 
          tickFormatter={formatAgeRange} // Format age into ranges
        />
        <YAxis label={{ value: 'Risk', angle: -90, position: 'insideLeft' }} />

        <Tooltip />
        <Legend />
        <Bar dataKey="risk" fill="#8884d8"/>
      </BarChart>
    );
  }

  if (type === "pie") {
    return (
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={80}
          fill="#82ca9d"
          label={(entry) => entry.name}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index]} />
          ))}
        </Pie>
      </PieChart>
    );
  }

  return null;
};

export default Chart;

import React from "react";
import { BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const Chart = ({ type, data }) => {
  if (type === "bar") {
    return (
      <BarChart width={300} height={200} data={data}>
        <Bar dataKey="value" fill="#8884d8" />
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

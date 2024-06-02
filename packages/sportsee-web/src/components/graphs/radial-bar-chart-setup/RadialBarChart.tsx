// src/components/RadialBarChartSetup.js

import React from "react";
import { RadialBarChart, RadialBar } from "recharts";
import "./radialBarChart.css";

const RadialBarChartSetup = ({ score }) => {
  const data = [
    {
      uv: score * 100,
      fill: "#e60000",
    },
    {
      uv: 100 - score * 100,
      fill: "transparent",
    },
  ];

  return (
    <div className="RBC-container">
      <RadialBarChart
        width={500}
        height={300}
        cx={250}
        cy={150}
        innerRadius={100}
        outerRadius={120}
        barSize={20}
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <RadialBar dataKey="uv" cornerRadius={10} />

        <div>
          <p>{score * 199}</p>
        </div>
      </RadialBarChart>
      <div className="RBC-inner-text">
        <p>{score * 100}%</p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </div>
  );
};

export default RadialBarChartSetup;

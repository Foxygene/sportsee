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
        className="radialbarchart"
        width={330}
        height={300}
        cx={165}
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
      <span className="RBC-title">Score</span>
      <div className="RBC-inner-text">
        <p className="RBC-score">{score * 100}%</p>
        <p className="RBC-description">de votre</p>
        <p className="RBC-description">objectif</p>
      </div>
    </div>
  );
};

export default RadialBarChartSetup;

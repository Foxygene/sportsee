import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./lineChartSetup.css";

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <div className="tooltip-line-container">
      <p className="tooltip-line-text">{`${payload[0].value} min`}</p>
    </div>
  );
};

function LineChartSetup(props: {
  lineChartData: { day: number; sessionLength: number }[];
}) {
  return (
    <div className="chart-container">
      <ResponsiveContainer className={"linechart"} width="100%" height={263}>
        <LineChart
          data={props.lineChartData}
          margin={{
            top: 0,
            right: -60,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="day"
            tickMargin={20}
            tick={{ fill: "#FFFFFF", opacity: 0.5 }}
            tickFormatter={(value) => {
              const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
              return daysOfWeek[value - 1];
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={["dataMin - 5", "dataMax + 5"]}
            yAxisId={"sessionLength"}
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickCount={0}
            tickMargin={0}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={2}
            yAxisId={"sessionLength"}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartSetup;

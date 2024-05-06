import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function RadarChartSetup(props) {
  return (
    <ResponsiveContainer width={258} height={263}>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={props.RadarChartData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RadarChartSetup;

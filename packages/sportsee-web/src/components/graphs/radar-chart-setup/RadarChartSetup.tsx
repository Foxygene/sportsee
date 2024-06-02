import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function RadarChartSetup(props) {
  const customTicks = [
    { value: 0, label: "Intensité" },
    { value: 1, label: "Vitesse" },
    { value: 2, label: "Force" },
    { value: 3, label: "Endurance" },
    { value: 4, label: "Energie" },
    { value: 5, label: "Cardio" },
  ];

  return (
    <ResponsiveContainer width={340} height={300}>
      <RadarChart
        width={258}
        height={263}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={props.RadarChartData}
      >
        <PolarGrid gridType="polygon" radialLines={false} />
        <PolarAngleAxis
          tickFormatter={(value) =>
            customTicks[value] && customTicks[value].label
          }
        />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RadarChartSetup;

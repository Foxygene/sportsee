import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

function BarChartSetup(props: {
  barChartData: { day: string; Kilogrammes: number; Calories: number }[];
  kgMinMaxValues: number[];
}) {
  console.log(props);
  return (
    <BarChart
      width={835}
      height={320}
      data={props.barChartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barGap={10}
      barCategoryGap={35}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="day" />
      <YAxis
        domain={[props.kgMinMaxValues[0] - 1, props.kgMinMaxValues[1] + 1]}
        orientation="right"
        axisLine={false}
        tickLine={false}
        yAxisId={"Kilo"}
        tickCount={4}
      />
      <YAxis yAxisId={"Cal"} style={{ display: "none" }} />
      <Tooltip />
      <Bar
        dataKey="Kilogrammes"
        fill="#000000"
        yAxisId={"Kilo"}
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="Calories"
        fill="#FF0101"
        yAxisId={"Cal"}
        radius={[10, 10, 0, 0]}
      />
    </BarChart>
  );
}

export default BarChartSetup;

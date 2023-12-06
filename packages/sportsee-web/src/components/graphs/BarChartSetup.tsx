import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./barChartSetup.css";

function BarChartSetup(props: {
  barChartData: { day: string; Kilogrammes: number; Calories: number }[];
  kgMinMaxValues: number[];
}) {
  function CustomTooltip(active: any): JSX.Element | null {
    const payloadIsEmpty = active.payload.length;

    if (!payloadIsEmpty) {
      return null;
    }

    return (
      <div className="tool-tip__bar-chart">
        <p className="tool-tip__bar-chart-text">
          {`${active.payload[0].payload.Kilogrammes}kg`}
        </p>
        <p className="tool-tip__bar-chart-text">
          {" "}
          {`${active.payload[0].payload.Calories}Kcal`}
        </p>
      </div>
    );
  }

  return (
    <ResponsiveContainer className={"barchart"} width="100%" height={185}>
      <BarChart
        data={props.barChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" tickMargin={20} />
        <YAxis
          domain={[props.kgMinMaxValues[0] - 1, props.kgMinMaxValues[1] + 1]}
          orientation="right"
          axisLine={false}
          tickLine={false}
          yAxisId={"Kilo"}
          tickCount={4}
          tickMargin={43}
        />
        <YAxis yAxisId={"Cal"} style={{ display: "none" }} />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="Kilogrammes"
          fill="#000000"
          yAxisId={"Kilo"}
          radius={[10, 10, 0, 0]}
          barSize={7}
        />
        <Bar
          dataKey="Calories"
          fill="#FF0101"
          yAxisId={"Cal"}
          radius={[10, 10, 0, 0]}
          barSize={7}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartSetup;

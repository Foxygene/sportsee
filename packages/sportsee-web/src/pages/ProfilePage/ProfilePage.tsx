import SideNavbar from "../../components/side-navbar/SideNavbar";
import TopNavbar from "../../components/top-navbar/TopNavbar";
import getActivityData from "../../data/info";
import { userMainData } from "../../types/userMainData";
import "./profilePage.css";
import {
  Bar,
  BarChart,
  CartesianAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ProfilePage(prop: userMainData) {
  const activity = getActivityData(true, prop.data.id)![0];

  const barChartData = activity.sessions.map((session) => {
    return {
      day: session.day.substring(9),
      Kilogrammes: session.kilogram,
      Calories: session.calories,
    };
  });

  const kgMinMaxValues = [
    Math.min(
      ...barChartData.map((session) => {
        return session.Kilogrammes;
      })
    ),
    Math.max(
      ...barChartData.map((session) => {
        return session.Kilogrammes;
      })
    ),
  ];

  return (
    <>
      <TopNavbar />
      <SideNavbar />
      <main>
        <div className="welcome-name">
          <span>Bonjour</span>{" "}
          <span style={{ color: "#FF0101" }}>
            {prop.data.userInfos.firstName}
          </span>
        </div>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <BarChart
          width={835}
          height={320}
          data={barChartData}
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
            domain={[kgMinMaxValues[0] - 1, kgMinMaxValues[1] + 1]}
            orientation="right"
            axisLine={false}
            tickLine={false}
            yAxisId={"Kilo"}
            tickCount={4}
          />
          <YAxis yAxisId={"Cal"} style={{ display: "none" }} />
          <Tooltip />
          <Legend />
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
      </main>
    </>
  );
}

export default ProfilePage;

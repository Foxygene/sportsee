import BarChartSetup from "../../components/graphs/bar-chart-setup/BarChartSetup";
import InfoCard from "../../components/info-card/InfoCard";
import caloriesIconLocation from "../../assets/calories-icon.svg";
import proteinIconLocation from "../../assets/protein-icon.svg";
import carbsIconLocation from "../../assets/carbs-icon.svg";
import fatIconLocation from "../../assets/fat-icon.svg";
import SideNavbar from "../../components/side-navbar/SideNavbar";
import TopNavbar from "../../components/top-navbar/TopNavbar";
import {
  getActivityData,
  getAverageSessionData,
  getPerformanceData,
} from "../../data/info";
import { userMainData } from "../../types/userMainData";
import "./profilePage.css";
import LineChartSetup from "../../components/graphs/line-chart-setup/LineChartSetup";
import RadarChartSetup from "../../components/graphs/radar-chart-setup/RadarChartSetup";
import { useDataSwitch } from "../../hooks/useDataSwitch";
import RadialBarChartSetup from "../../components/graphs/radial-bar-chart-setup/RadialBarChart";

function ProfilePage(prop: userMainData) {
  const { isMock } = useDataSwitch();
  const activity = getActivityData(isMock, prop.data.id)![0];

  const barChartData = activity.sessions.map((session) => {
    return {
      day: session.day.substring(9),
      Kilogrammes: session.kilogram,
      Calories: session.calories,
    };
  });

  const average = getAverageSessionData(isMock, prop.data.id)![0];

  const lineChartData = average.sessions.map((session) => {
    return {
      day: session.day,
      sessionLength: session.sessionLength,
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

  const performance = getPerformanceData(isMock, prop.data.id)![0];

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

        <div className="main-container">
          <div className="graph-container">
            <div className="barchart-container">
              <div className="info-container">
                <span className="barchart-title">Activité quotidienne</span>
                <div className="legend-container">
                  <div className="legend">
                    <span className="kg"></span>
                    <span>Poids (kg)</span>
                  </div>
                  <div className="legend">
                    <span className="cal"></span>
                    <span>Calories brûlées (kCal)</span>
                  </div>
                </div>
              </div>
              <div className="main-container">
                <BarChartSetup
                  barChartData={barChartData}
                  kgMinMaxValues={kgMinMaxValues}
                />
              </div>
              <div className="second-container">
                <div className="linechart-container">
                  <span className="linechart-title">
                    Durée moyenne des sessions
                  </span>
                  <LineChartSetup lineChartData={lineChartData} />
                </div>
                <RadarChartSetup RadarChartData={performance.data} />
                <RadialBarChartSetup
                  score={prop.data.todayScore ?? prop.data.score}
                />
              </div>
            </div>
          </div>
          <div className="infocards-container">
            <InfoCard
              iconPath={caloriesIconLocation}
              value={prop.data.keyData.calorieCount}
              type={["Calories", "kCal"]}
            />
            <InfoCard
              iconPath={proteinIconLocation}
              value={prop.data.keyData.proteinCount}
              type={["Proteines", "g"]}
            />
            <InfoCard
              iconPath={carbsIconLocation}
              value={prop.data.keyData.carbohydrateCount}
              type={["Glucides", "g"]}
            />
            <InfoCard
              iconPath={fatIconLocation}
              value={prop.data.keyData.lipidCount}
              type={["Lipides", "g"]}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default ProfilePage;

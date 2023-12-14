import BarChartSetup from "../../components/graphs/BarChartSetup";
import InfoCard from "../../components/info-card/InfoCard";
import caloriesIconLocation from "../../assets/calories-icon.svg";
import proteinIconLocation from "../../assets/protein-icon.svg";
import carbsIconLocation from "../../assets/carbs-icon.svg";
import fatIconLocation from "../../assets/fat-icon.svg";
import SideNavbar from "../../components/side-navbar/SideNavbar";
import TopNavbar from "../../components/top-navbar/TopNavbar";
import getActivityData from "../../data/info";
import { userMainData } from "../../types/userMainData";
import "./profilePage.css";

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

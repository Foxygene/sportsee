import BarChartSetup from "../../components/graphs/bar-chart-setup/BarChartSetup";
import InfoCard from "../../components/info-card/InfoCard";
import caloriesIconLocation from "../../assets/calories-icon.svg";
import proteinIconLocation from "../../assets/protein-icon.svg";
import carbsIconLocation from "../../assets/carbs-icon.svg";
import fatIconLocation from "../../assets/fat-icon.svg";
import SideNavbar from "../../components/side-navbar/SideNavbar";
import TopNavbar from "../../components/top-navbar/TopNavbar";
import "./profilePage.css";
import LineChartSetup from "../../components/graphs/line-chart-setup/LineChartSetup";
import RadarChartSetup from "../../components/graphs/radar-chart-setup/RadarChartSetup";
import { useDataSwitch } from "../../hooks/useDataSwitch";
import RadialBarChartSetup from "../../components/graphs/radial-bar-chart-setup/RadialBarChart";
import { useParams } from "react-router-dom";
import GetData from "../../services/GetData";
import { dataFormater } from "../../services/dataFormater";

function ProfilePage() {
  const { id } = useParams();
  const { isMock } = useDataSwitch();

  const {
    userData,
    activityData,
    averageSessionData,
    performanceData,
    loading,
  } = GetData(id, isMock);

  const { barChartData, kgMinMaxValues, lineChartData } = dataFormater(
    activityData,
    averageSessionData
  );

  return (
    <>
      {loading ? (
        <div>LOADING ....</div>
      ) : (
        <>
          <TopNavbar />
          <SideNavbar />
          <main>
            <div className="welcome-name">
              <span>Bonjour</span>{" "}
              <span style={{ color: "#FF0101" }}>
                {userData.userInfos.firstName}
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
                  <div>
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
                    <RadarChartSetup RadarChartData={performanceData.data} />
                    <RadialBarChartSetup
                      score={userData.todayScore ?? userData.score}
                    />
                  </div>
                </div>
              </div>
              <div className="infocards-container">
                <InfoCard
                  iconPath={caloriesIconLocation}
                  value={userData.keyData.calorieCount}
                  type={["Calories", "kCal"]}
                />
                <InfoCard
                  iconPath={proteinIconLocation}
                  value={userData.keyData.proteinCount}
                  type={["Proteines", "g"]}
                />
                <InfoCard
                  iconPath={carbsIconLocation}
                  value={userData.keyData.carbohydrateCount}
                  type={["Glucides", "g"]}
                />
                <InfoCard
                  iconPath={fatIconLocation}
                  value={userData.keyData.lipidCount}
                  type={["Lipides", "g"]}
                />
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default ProfilePage;

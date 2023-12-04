import BarChartSetup from "../../components/graphs/BarChartSetup";
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
        <BarChartSetup
          barChartData={barChartData}
          kgMinMaxValues={kgMinMaxValues}
        />
      </main>
    </>
  );
}

export default ProfilePage;

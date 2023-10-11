import SideNavbar from "../../components/side-navbar/SideNavbar";
import TopNavbar from "../../components/top-navbar/TopNavbar";
import { userMainData } from "../../types/userMainData";
import "./profilePage.css";

function ProfilePage(prop: userMainData) {
  console.log(prop);
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
      </main>
    </>
  );
}

export default ProfilePage;

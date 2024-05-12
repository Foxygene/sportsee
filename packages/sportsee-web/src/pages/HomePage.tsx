import SideNavbar from "../components/side-navbar/SideNavbar";
import TopNavbar from "../components/top-navbar/TopNavbar";
import users from "../assets/Mocks/mockMainData.json";
import { Link } from "react-router-dom";
import { DataSwitcherButton } from "../components/DataSwitcherButton";

function HomePage() {
  return (
    <>
      <TopNavbar />
      <SideNavbar />
      <main>
        <DataSwitcherButton></DataSwitcherButton>
        <ul>
          {users.map((user) => (
            <li>
              <Link to={`/user/${user.id}`}>
                {user.userInfos.firstName} {user.userInfos.lastName}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;

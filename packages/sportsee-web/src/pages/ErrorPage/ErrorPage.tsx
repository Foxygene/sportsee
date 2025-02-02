import { Link, useRouteError } from "react-router-dom";
import TopNavbar from "../../components/top-navbar/TopNavbar";
import SideNavbar from "../../components/side-navbar/SideNavbar";

export function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <TopNavbar />
      <SideNavbar />
      <main>
        <p>Oups, an error occured while fecthing data</p>
        <Link to="/">Return to Home</Link>
      </main>
    </>
  );
}

import { createHashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import users from "./assets/Mocks/mockMainData.json";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const profilePage = users.map((profile) => ({
  path: `/user/${profile.id}`,
  element: <ProfilePage key={profile.id} data={profile} />,
}));

export const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  ...profilePage,
]);

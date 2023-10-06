import { createHashRouter } from "react-router-dom";
import HomePage from "./HomePage";
import users from "./assets/Mocks/mockMainData.json";
import Profile from "./Profile";

const profilePage = users.map((profile) => ({
  path: `/user/${profile.id}`,
  element: <Profile />,
}));

export const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  ...profilePage,
]);

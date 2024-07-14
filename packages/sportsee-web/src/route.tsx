import { createHashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/:id",
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  },
]);

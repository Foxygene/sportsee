import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./route.js";
import { DataSwitchContextProvider } from "./hooks/useDataSwitch.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataSwitchContextProvider>
      <RouterProvider router={router} />
    </DataSwitchContextProvider>
  </React.StrictMode>
);

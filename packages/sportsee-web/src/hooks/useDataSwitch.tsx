import { createContext, useState } from "react";

export const dataSwitchContext = createContext({
  dataSwitchValue: "api",
  dataSwitch: () => {},
});

export function DataSwitchContextProvider({ children }) {
  const [dataSwitchValue, setDataSwitchValue] = useState("mock");

  const dataSwitch = () => {
    setDataSwitchValue(dataSwitchValue === "mock" ? "api" : "mock");
  };

  return (
    <dataSwitchContext.Provider value={{ dataSwitchValue, dataSwitch }}>
      {children}
    </dataSwitchContext.Provider>
  );
}

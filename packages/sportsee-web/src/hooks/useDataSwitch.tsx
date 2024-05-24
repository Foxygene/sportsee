import { ReactNode, createContext, useState } from "react";

interface Props {
  children?: ReactNode;
}

export const dataSwitchContext = createContext({
  dataSwitchValue: "api",
  dataSwitch: () => {},
});

export function DataSwitchContextProvider({ children }: Props) {
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

import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  children?: ReactNode;
}

const dataSwitchContext = createContext({
  dataSwitchValue: "api",
  dataSwitch: () => {},
});

export function useDataSwitch() {
  const { dataSwitchValue, dataSwitch } = useContext(dataSwitchContext);
  return {
    isMock: dataSwitchValue === "mock",
    isAPI: dataSwitchValue === "api",
    dataSwitchValue,
    dataSwitch,
  };
}

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

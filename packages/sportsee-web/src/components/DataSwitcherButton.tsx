import { useContext } from "react";
import { dataSwitchContext } from "../hooks/useDataSwitch";

export function DataSwitcherButton() {
  const { dataSwitch, dataSwitchValue } = useContext(dataSwitchContext);
  return <button onClick={dataSwitch}>{dataSwitchValue}</button>;
}

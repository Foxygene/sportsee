import { useDataSwitch } from "../hooks/useDataSwitch";

export function DataSwitcherButton() {
  const { dataSwitch, dataSwitchValue } = useDataSwitch();
  return <button onClick={dataSwitch}>{dataSwitchValue}</button>;
}

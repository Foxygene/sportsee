import { useParams } from "react-router-dom";
import { useDataSwitch } from "../hooks/useDataSwitch";
import GetData from "./GetData";

export function DataFormater(activityData, averageSessionData) {
  const barChartData = activityData.sessions.map((session) => {
    return {
      day: session.day.substring(9),
      Kilogrammes: session.kilogram,
      Calories: session.calories,
    };
  });

  const kgMinMaxValues = [
    Math.min(
      ...barChartData.map((session) => {
        return session.Kilogrammes;
      })
    ),
    Math.max(
      ...barChartData.map((session) => {
        return session.Kilogrammes;
      })
    ),
  ];

  const lineChartData = averageSessionData.sessions.map((session) => {
    return {
      day: session.day,
      sessionLength: session.sessionLength,
    };
  });

  console.log("ici", barChartData, kgMinMaxValues, lineChartData);

  return {
    barChartData,
    kgMinMaxValues,
    lineChartData,
  };
}

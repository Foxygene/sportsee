export function dataFormater(activityData, averageSessionData) {
  const barChartData = activityData
    ? activityData.sessions.map((session) => {
        return {
          day: session.day.substring(9),
          Kilogrammes: session.kilogram,
          Calories: session.calories,
        };
      })
    : null;

  const kgMinMaxValues = barChartData
    ? [
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
      ]
    : null;

  const lineChartData = averageSessionData
    ? averageSessionData.sessions.map((session) => {
        return {
          day: session.day,
          sessionLength: session.sessionLength,
        };
      })
    : null;

  return { barChartData, kgMinMaxValues, lineChartData };
}

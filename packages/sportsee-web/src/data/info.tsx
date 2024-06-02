import mockActivity from "../assets/Mocks/mockActivity.json";
import mockAverageSession from "../assets/Mocks/mockAverageSessions.json";
// import mockMainData from "../assets/Mocks/mockMainData.json";
import mockPerformance from "../assets/Mocks/mockPerformance.json";

async function getFromAPI(userID: number, category: string) {
  const response = await fetch(
    `http://localhost:3000/user/${userID}${category}`
  );
  const data = await response.json();
  return data;
}

export function getActivityData(isMock: boolean, userID: number) {
  if (isMock) {
    return mockActivity.filter((user) => user.userId === userID);
  }
  getFromAPI(userID, "/activity");
}

export function getAverageSessionData(isMock: boolean, userID: number) {
  if (isMock) {
    return mockAverageSession.filter((user) => user.userId === userID);
  }
  return getFromAPI(userID, "/average-sessions");
}

export function getPerformanceData(isMock: boolean, userID: number) {
  if (isMock) {
    return mockPerformance.filter((user) => user.userId === userID);
  }
  return getFromAPI(userID, "/performance");
}

// const response = await fetch(`http://localhost:3000/user/${userID}`);
// const data = await response.json();
// console.log(data);

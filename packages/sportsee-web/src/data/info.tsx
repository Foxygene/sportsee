import mockActivity from "../assets/Mocks/mockActivity.json";
import mockAverageSession from "../assets/Mocks/mockAverageSessions.json";
// import mockMainData from "../assets/Mocks/mockMainData.json";
import mockPerformance from "../assets/Mocks/mockPerformance.json";

export function getActivityData(isMock: boolean, userID: number) {
  if (isMock) {
    return mockActivity.filter((user) => user.userId === userID);
  }
}

export function getAverageSessionData(isMock: boolean, userID: number) {
  if (isMock) {
    return mockAverageSession.filter((user) => user.userId === userID);
  }
}

export function getPerformanceData(isMock: boolean, userID: number) {
  if (isMock) {
    return mockPerformance.filter((user) => user.userId === userID);
  }
}
// const response = await fetch(`http://localhost:3000/user/${userID}`);
// const data = await response.json();
// console.log(data);

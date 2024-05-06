import mockActivity from "../assets/Mocks/mockActivity.json";
import mockAverageSession from "../assets/Mocks/mockAverageSessions.json";
// import mockMainData from "../assets/Mocks/mockMainData.json";
import mockPerformance from "../assets/Mocks/mockPerformance.json";

export function getActivityData(useMock: boolean, userID: number) {
  if (useMock) {
    return mockActivity.filter((user) => user.userId === userID);
  }
}

export function getAverageSessionData(useMock: boolean, userID: number) {
  if (useMock) {
    return mockAverageSession.filter((user) => user.userId === userID);
  }
}

export function getPerformanceData(useMock: boolean, userID: number) {
  if (useMock) {
    return mockPerformance.filter((user) => user.userId === userID);
  }
}
// const response = await fetch(`http://localhost:3000/user/${userID}`);
// const data = await response.json();
// console.log(data);

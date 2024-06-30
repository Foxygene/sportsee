import { useState, useEffect } from "react";
import { callAPI } from "./callAPI";
import { useDataSwitch } from "../hooks/useDataSwitch";
import mockActivity from "../assets/Mocks/mockActivity.json";
import mockAverageSession from "../assets/Mocks/mockAverageSessions.json";
import mockMainData from "../assets/Mocks/mockMainData.json";
import mockPerformance from "../assets/Mocks/mockPerformance.json";

const GetData = (userId: string, isMock: boolean) => {
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageSessionData, setAverageSessionData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isMock) {
      const getUserData = async () => {
        try {
          const data = await callAPI(userId, "");
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      const getActivityData = async () => {
        try {
          const data = await callAPI(userId, "/activity");
          const oui = mockActivity.filter(
            (user) => user.userId === parseInt(userId)
          )![0];
          setActivityData(oui);
          console.log("api", data);
          console.log(
            "mock",
            mockActivity.filter((user) => user.userId === parseInt(userId))![0]
          );
        } catch (error) {
          console.error("Error fetching activity data:", error);
        }
      };

      const getAverageSessionData = async () => {
        try {
          const data = await callAPI(userId, "/average-sessions");
          setAverageSessionData(data);
        } catch (error) {
          console.error("Error fetching average session data:", error);
        }
      };

      const getPerformanceData = async () => {
        try {
          const data = await callAPI(userId, "/performance");
          setPerformanceData(data);
        } catch (error) {
          console.error("Error fetching average session data:", error);
        }
      };

      const fetchData = async () => {
        setLoading(true);
        await Promise.all([
          getUserData(),
          getActivityData(),
          getAverageSessionData(),
          getPerformanceData(),
        ]);
        setLoading(false);
      };

      fetchData();

      return () => {
        setUserData(null);
        setActivityData(null);
        setAverageSessionData(null);
        setPerformanceData(null);
      };
    } else {
      const oui = mockActivity.filter(
        (user) => user.userId === parseInt(userId)
      )![0];
      console.log(
        mockActivity.filter((user) => user.userId === parseInt(userId))![0]
      );
      setActivityData(oui);
    }
  }, [userId, isMock]);

  return {
    userData,
    activityData,
    averageSessionData,
    performanceData,
    loading,
  };
};

export default GetData;

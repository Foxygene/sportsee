import { useState, useEffect } from "react";
import { callAPI } from "./callAPI";
import mockActivity from "../assets/Mocks/mockActivity.json";
import mockAverageSession from "../assets/Mocks/mockAverageSessions.json";
import mockMainData from "../assets/Mocks/mockMainData.json";
import mockPerformance from "../assets/Mocks/mockPerformance.json";

interface UserInfo {
  firstName: string;
  lastName: string;
  age: number;
}

interface KeyData {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
}

interface UserData {
  id: number;
  userInfos: UserInfo;
  todayScore?: number;
  score?: number;
  keyData: KeyData;
}

interface Session {
  day: string;
  kilogram: number;
  calories: number;
}

interface ActivityData {
  userId: number;
  sessions: Session[];
}

interface AverageSessionData {
  userId: number;
  sessions: { day: number; sessionLength: number }[];
}

interface PerformanceData {
  userId: number;
  kind: { [key: number]: string };
  data: { value: number; kind: number }[];
}

const GetData = (userId: string, isMock: boolean) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [activityData, setActivityData] = useState<ActivityData | null>(null);
  const [averageSessionData, setAverageSessionData] =
    useState<AverageSessionData | null>(null);
  const [performanceData, setPerformanceData] =
    useState<PerformanceData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (!isMock) {
        try {
          await Promise.all([
            (async () => {
              const data = await callAPI(userId, "");
              setUserData(data);
            })(),
            (async () => {
              const data = await callAPI(userId, "/activity");
              setActivityData(data);
            })(),
            (async () => {
              const data = await callAPI(userId, "/average-sessions");
              setAverageSessionData(data);
            })(),
            (async () => {
              const data = await callAPI(userId, "/performance");
              setPerformanceData(data);
            })(),
          ]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        try {
          const data = mockMainData.find(
            (user) => user.id === parseInt(userId)
          );
          setUserData(data || null);
        } catch (error) {
          console.error("Error fetching user mock:", error);
        }

        try {
          const data = mockActivity.find(
            (user) => user.userId === parseInt(userId)
          );
          setActivityData(data || null);
        } catch (error) {
          console.error("Error fetching activity mock:", error);
        }

        try {
          const data = mockAverageSession.find(
            (user) => user.userId === parseInt(userId)
          );
          setAverageSessionData(data || null);
        } catch (error) {
          console.error("Error fetching average session mock:", error);
        }

        try {
          const data = mockPerformance.find(
            (user) => user.userId === parseInt(userId)
          );
          setPerformanceData(data || null);
        } catch (error) {
          console.error("Error fetching performance mock:", error);
        }
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      setUserData(null);
      setActivityData(null);
      setAverageSessionData(null);
      setPerformanceData(null);
    };
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

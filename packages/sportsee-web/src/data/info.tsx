import { useEffect, useState } from 'react';
import mockActivity from '../assets/Mocks/mockActivity.json';
import mockAverageSession from '../assets/Mocks/mockAverageSessions.json';
// import mockMainData from "../assets/Mocks/mockMainData.json";
import mockPerformance from '../assets/Mocks/mockPerformance.json';

interface ActivityData {
  userId: number;
  sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
}

interface AverageSessionData {
  userId: number;
  sessions: {
    day: number;
    sessionLength: number;
  }[];
}

interface PerformanceData {
  userId: number;
  kind: {
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
  };
  data: {
    value: number;
    kind: number;
  }[];
}

type Data = ActivityData | AverageSessionData | PerformanceData | null;

export function useDataFetcher(
  isMock: boolean,
  userID: number,
  category: string
): Data {
  const [data, setData] = useState<Data>(null);

  useEffect(() => {
    if (isMock) {
      let mockData: Data | null = null;
      if (category === '/activity') {
        mockData = mockActivity.find((user) => user.userId === userID) || null;
      } else if (category === '/average-sessions') {
        mockData =
          mockAverageSession.find((user) => user.userId === userID) || null;
      } else if (category === '/performance') {
        mockData =
          mockPerformance.find((user) => user.userId === userID) || null;
      }
      setData(mockData);
    } else {
      const getData = async () => {
        const apiUrl = `http://localhost:3000/user/${userID}${category}`;
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error(`Did not get an ok. Got: ${response.statusText}`);
          }
          const json = await response.json();
          setData(json as Data);
        } catch (error) {
          console.error(`Error getting data: woooops`);
        }
      };
      getData();
    }
  }, [isMock, userID, category]);

  return data;
}

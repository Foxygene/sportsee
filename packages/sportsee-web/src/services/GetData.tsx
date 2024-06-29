import { useState, useEffect } from 'react';
import { callAPI } from './callAPI';
const GetData = (userId: any) => {
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //ici peut être mettre le test pour savoir api ou mock
    // si api initialiser callAPI si mock MockService

    const getUserData = async () => {
      try {
        const data = await callAPI(userId, '');
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const getActivityData = async () => {
      try {
        const data = await callAPI(userId, 'activity');
        setActivityData(data);
      } catch (error) {
        console.error('Error fetching activity data:', error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([getUserData(), getActivityData]);
      setLoading(false);
    };

    fetchData();

    return () => {
      setUserData(null);
      setActivityData(null);
      //completer avec les reste des services.
    };
  }, [userId]);

  return {
    userData,
    activityData,
    loading,
  };
};

export default GetData;

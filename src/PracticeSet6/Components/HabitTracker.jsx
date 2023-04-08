import React, { useEffect, useState } from "react";
import { fakeFetch3 } from "../Data";
import { ShowHabbitTracker } from "./ShowHabbitTracker";

export const HabitTracker = () => {
  const [HabbitData, setHabbitData] = useState([]);

  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { habits },
      } = await fakeFetch3(url);
      status === 200 && setHabbitData(habits);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/habits");
  }, []);

  return (<>
    <ShowHabbitTracker HabbitData={HabbitData}/>
  </>);
};

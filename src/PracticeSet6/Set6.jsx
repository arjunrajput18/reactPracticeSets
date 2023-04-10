import React, { useEffect, useState } from "react";
import { ProductQ } from "./Components/ProductQ";
import { TodoQ } from "./Components/TodoQ";
import { HabitTracker } from "./Components/HabitTracker";
import { VideoLibrary } from "./Components/VideoLibrary";
import { SocialMedia } from "./Components/SocialMedia";
import {
  fakeFetch10,
  fakeFetch5,
  fakeFetch6,
  fakeFetch7,
  fakeFetch8,
  fakeFetch9,
} from "./Data";
import { HabitTracker2Q } from "./Components/HabitTracker2Q";
import { ShowDetails } from "./Components/ShowDetails";
import { UserProfile } from "./Components/UserProfile";
import { VideoLibrary2 } from "./Components/VideoLibrary2";
import { FollowLogic } from "./Components/FollowLogic";
export const Question1 = () => {
  return <ProductQ />;
};

export const Question2 = () => {
  return <TodoQ />;
};

export const Question3 = () => {
  return <HabitTracker />;
};

export const Question4 = () => {
  return <VideoLibrary />;
};

export const Question5 = () => {
  const [showData, setShowData] = useState([]);

  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { posts },
      } = await fakeFetch5(url);
      status === 200 && setShowData(posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/posts");
  }, []);

  return <SocialMedia showData={showData} />;
};

export const Question6 = () => {
  const [showData, setShowData] = useState([]);

  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { habits },
      } = await fakeFetch6(url);
      status === 200 && setShowData(habits);
      console.log(habits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/habits");
  }, []);

  return <HabitTracker2Q showData={showData} />;
};

export const Question7 = () => {
  const [showData, setShowData] = useState([]);

  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { projects },
      } = await fakeFetch7(url);
      status === 200 && setShowData(projects);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fakeData("https://example.com/api/projects");
  });

  return <ShowDetails showData={showData} />;
};

export const Question8 = () => {
  const [getData, setGetData] = useState({});

  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { profiles },
      } = await fakeFetch8(url);
      console.log(profiles);
      status === 200 && setGetData(profiles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/profile");
  }, []);

  return (
    <>
      <UserProfile getData={getData} setGetData={setGetData} />
    </>
  );
};

export const Question9 = () => {
  const [videoData, setVideoData] = useState({});
  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { videos },
      } = await fakeFetch9(url);
      status === 200 && setVideoData(videos);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fakeData("https://example.com/api/getvideo");
  }, []);

  return <VideoLibrary2 videoData={videoData} setVideoData={setVideoData} />;
};

export const Question10 = () => {
  const [followData, setFollowData] = useState({});

  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { profile },
      } = await fakeFetch10(url);
      status === 200 && setFollowData(profile);
      console.log(profile)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fakeData("https://example.com/api/profile");
  }, []);
  return <FollowLogic followData={followData} setFollowData={setFollowData} />;
};

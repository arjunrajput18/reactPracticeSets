import React, { createContext, useEffect, useState } from "react";
import { fakeFetch4 } from "../../Data";

export const VideoConext = createContext();

export const VideoProvider = ({ children }) => {
  const [videoData, setVideoData] = useState([]);
  const [likedVideo,setLikedVideo]=useState([])
  const [watchVideo,setWatchedVideo]=useState([])



  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { videos },
      } = await fakeFetch4(url);
      if (status === 200) {
        console.log(videos)
        setVideoData(videos);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/videos");
  }, []);

const clickHandler=(video)=>{
setLikedVideo([...likedVideo,video])
}

const watchLaterhandler=(video)=>{
  setWatchedVideo([...watchVideo,video])

}
  return (
    <VideoConext.Provider value={{ VideoConext, videoData,likedVideo,clickHandler,watchLaterhandler ,watchVideo}}>
      {children}
    </VideoConext.Provider>
  );
};

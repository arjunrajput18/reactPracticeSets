import React, { useContext } from "react";
import { VideoConext } from "../context/VideoContext";
import { VideoCard } from "../component/VideoCard";

export const WatchLater = () => {
  const { watchVideo } = useContext(VideoConext);
  console.log("www",watchVideo)
  return (
    <>
      {watchVideo.map((video) => (
        <VideoCard video={video} />
      ))}
    </>
  );
};

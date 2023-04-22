import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { VideoConext } from "../context/VideoContext";
import { VideoCard } from "../component/VideoCard";

export const VideosDetails = () => {
  const { videoTitile } = useParams();
  const { videoData } = useContext(VideoConext);

  const showVideo = videoData.find(({ title }) => title === videoTitile);

  return (
    <>
      <VideoCard video={showVideo} />
    </>
  );
};

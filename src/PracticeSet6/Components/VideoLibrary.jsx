import React, { useEffect, useState } from "react";
import { fakeFetch4 } from "../Data";

const ShowVideoLibrary = ({ videoData }) => {


  return (
    <>
      {videoData.map(({ title, thumbnail, views, likes }) => (
        <>
          <div style={{ display: "inline-block", padding: "1rem" }}>
            <img src={thumbnail} alt="thumb" />
            <p>{title}</p>
            <p>views: {views}</p>
            <likes>likes :{likes}</likes>
          </div>
        </>
      ))}

    </>
  );
};

const DeleteVideo=({setVideoData})=>{

    const clickHandler=()=>{
        setVideoData((videoData)=>videoData.filter((data,i)=>i!==0))
    }
return(

    <button onClick={clickHandler}>Delete video</button>
)


}



export const VideoLibrary = () => {
  const [videoData, setVideoData] = useState([]);

  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { videos },
      } = await fakeFetch4(url);
      status === 200 && setVideoData(videos);
      console.log(videos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/videos");
  }, []);

  return (
    <>
      <ShowVideoLibrary videoData={videoData} />
        <DeleteVideo  setVideoData={setVideoData}/>
    </>
  );
};

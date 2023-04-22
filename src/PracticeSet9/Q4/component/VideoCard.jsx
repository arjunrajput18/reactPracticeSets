import React, { useContext } from "react";
import { VideoConext } from "../context/VideoContext";
import { NavLink } from "react-router-dom";
// description url
export const VideoCard = ({video,noDetail}) => {

  console.log(video,"vi")
 const { thumbnail, title,description,duration }=video
const {clickHandler,watchLaterhandler}=useContext(VideoConext)
  return (
    <>
      <li style={{border:"1px solid black",padding:"1rem" ,display:"inline-block"}}>
        <img src={thumbnail} alt={"videos"} height={300} width={250}/>
        <p>{title}</p>
       {!noDetail && <p>{description}</p>}
       {!noDetail && <p>Duration :{duration}</p>}
        <NavLink to={`/videos/${title}`}>watch Here</NavLink>
        <button onClick={()=>clickHandler(video)}>Liked</button>
        <button onClick={()=>watchLaterhandler(video)}>Added to Watch later</button>
      </li>
    </>
  );
};

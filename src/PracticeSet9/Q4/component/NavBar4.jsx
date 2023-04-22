import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { VideoConext } from '../context/VideoContext'

export const NavBar4 = () => {
const { likedVideo ,watchVideo}=useContext(VideoConext)
  return (
 <div>
        <NavLink to="/">Home</NavLink>{" "}
        <NavLink to="/videos">Videos</NavLink>{" "}
        <NavLink to="/likedVideos">Liked Videos({likedVideo.length})</NavLink>{" "}
        <NavLink to="/watchLater">Watch Later({watchVideo.length})</NavLink>{" "}
 </div>
    )
}

import React, { useContext } from 'react'
import { VideoConext } from '../context/VideoContext'
import { VideoCard } from '../component/VideoCard'

export const LikedVideos = () => {
  const {likedVideo}=useContext(VideoConext)


  return (
<>
<ul>
  {likedVideo.map((video)=>{

    return <VideoCard video={video} />})}
</ul>
</>
    

  )
}

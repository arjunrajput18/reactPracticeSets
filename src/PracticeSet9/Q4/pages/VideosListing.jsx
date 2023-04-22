import React, { useContext } from 'react'
import { VideoConext } from '../context/VideoContext'
import { VideoCard } from '../component/VideoCard'

export const VideosListing= () => {
const {videoData}=useContext(VideoConext)

console.log(videoData,"v")

  return (
    <>
     <div>
      <h1>All Videos</h1>
      <ul>
      {videoData.map((video)=><VideoCard video={video} noDetail/>)}
      </ul>
      </div> 
    </>
  )
}

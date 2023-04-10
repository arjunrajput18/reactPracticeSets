import React from 'react'

export const VideoLibrary2 = ({videoData:{thumbnail,title,likes,views,label},setVideoData}) => {
  return (
    <div>
    <img src={thumbnail} alt='img'/>
<h2>title:-{title}</h2>
<p>likes:-{likes}</p>
<p>views:- {views}</p>
{label && <p>label:{label}</p>}
<button onClick={()=>setVideoData((videoData)=>videoData={...videoData,label:"self Movtivation"})}>Add label</button>

    </div>
  )
}

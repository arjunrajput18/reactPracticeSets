import React from 'react'
// Build a React component which takes an image, image height and image width as props and sets the height and width of the image and displays the image on DOM. Image link - https://picsum.photos/200
export const ShowImg = ({link,height,width}) => {

    return (
      <img src={link} style={{height, width}} alt="random" />  )
}

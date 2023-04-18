import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

export const Profile = () => {
  const {userData}=useContext(BookContext)
 
 const {img,bio,name}=userData
  return (
    <>
      <div>
        <img src={img} alt={"image1"} height={300} width={250}  />
        <div><b>Name:{name}</b></div>
        <div><b>bio:-</b>{bio}</div>
      </div>
    </>
  )
}

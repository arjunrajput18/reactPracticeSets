import React, { useState } from 'react'
import { movies2 } from '../Data'

export const Movie2Q = () => {
const [genreType,setGenreType]=useState(null)
 const clickHandler=(type)=>{
    setGenreType(type)
 }
const filterData=genreType?movies2.filter(({genre})=>genreType===genre):movies2

 return (
    <>
        <button onClick={()=>clickHandler("Action")}>Action</button>
        <button onClick={()=>clickHandler("Drama")}>Drama</button>
        <button onClick={()=>clickHandler("Comedy")}>Comedy</button>
        <ul>
{filterData.map(({title,director,genre,releaseYear},i)=><li key={i}>{title}{director}{genre}{releaseYear}</li>)}
        </ul>
    </>
  )
}

import React, { useState } from "react";
import { movies } from "../Data";

export const MovieQ = () => {
    const [inputRating,setInputRating]=useState("");

const handlerChange=(e)=>{
setInputRating(e.target.value)
}
const ratingFilter=movies.filter(({rating})=>rating>=inputRating)
console.log(ratingFilter)  
return (
    <>
      <input  type="number" onChange={handlerChange} />
      <ul>
      {ratingFilter.map(({rating,genre,director,title},i)=><li key={i}>rating:{rating} genre:{genre} director:{director} title:{title}</li>)}
      </ul>
    </>
  );
};

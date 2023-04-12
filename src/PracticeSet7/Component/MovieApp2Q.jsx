// import React, { useState } from 'react'

// export const MovieApp2Q = ({showMovie}) => {

//   const [selectedGenre,setSelectedGenre]=useState("All");

// const filterMovies=selectedGenre==="All"?showMovie:showMovie.filter(({genre})=>genre===selectedGenre)
// console.log(filterMovies)
//   return (
//  <>
//  <h2>Movies</h2>
//  <label>filter by Genre:</label>
// <select onChange={()=>setSelectedGenre((e)=>e.target.value)}>
//   <option value={"All"}>All</option>
//   <option value={"Action"}>Action</option>
//   <option value={"Crime"}>Crime</option>
//   <option value={"Drama"}>Drama</option>
//   <option value={"Comedy"}>Comedy</option>
//   <option value={"Science Fiction"}>Science Fiction</option>
// </select>
// <ul>
// {filterMovies.map(({title,year,genre})=><li key={title}>
// <p>{title}</p>
// <p>{year}</p>
// <p>{genre}</p>

// </li>)}
// </ul>
//  </>
//   )
// }

export const MovieApp2Q = ({title,genre,year}) => {


  return (
    <>
<li>
  <p>{title}</p>
  <p>{genre}</p>
  <p>{year}</p>
</li>
    </>
  )
}

import React, { useState } from 'react'
import { books } from '../Data'

export const BookQ = () => {
const [inputYear,setInputYear]=useState("")

const handlerChange=(e)=>{
setInputYear(e.target.value)
}
const publishYear=books.filter(({year})=>inputYear<=year)
console.log(publishYear)
    return (
    <>
        <input type='number' onChange={handlerChange}/>
        <ul>

        {publishYear.map(({year,title,author,genre},i)=><li key={i}>{year} {title} {author} {genre}</li>)}

        </ul>
    </>
  )
}

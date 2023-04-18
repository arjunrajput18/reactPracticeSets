import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import { BookCard } from '../component/BookCard'

export const Read = () => {
  const {readList}=useContext(BookContext)
  return (
<>
<ul>
{readList.map((read,i)=>
<BookCard book={read} i={i+1}/>)}
</ul>

</>
  )
}

import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import { BookCard } from '../component/BookCard'

export const Favorite = () => {
  const styles = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: "2.7rem",
      listStyleType: "none",

  }
  const {favListData}=useContext(BookContext)
  console.log("fav",favListData)
  return (
   <>
    <ul style={styles}>
      {favListData.map((data,i)=><>
<BookCard book={data} i={i+1} added/>
      </>)}
    </ul>
   </>
  )
}

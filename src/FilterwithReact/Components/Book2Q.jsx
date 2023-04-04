import React, { useState } from 'react'
import { books2 } from '../Data'
// Create a React app that displays a list of books with their title, author, genre, and publication year. Implement buttons for each book genre (e.g. fiction, non-fiction, mystery) and filter the displayed list of books to show only those in the selected genre when the corresponding button is clicked, using the filter() function.
export const Book2Q = () => {
const [categoryType,setCategoryType]=useState(null)

    const handlerCLick=(type)=>{
        setCategoryType(type)
    }
    const filterType=categoryType?books2.filter(({genre})=>genre===categoryType):books2;
    // console.log(filterType)
  return (
 <>

<button onClick={()=>handlerCLick("Fiction")}>fiction</button>
<button onClick={()=>handlerCLick("Non-fiction")}>non-fiction</button>
<button onClick={()=>handlerCLick("Mystery")}>mystery</button>
<ul>
{filterType.map(({title, author, genre, publicationYear},i)=><li key={i}>{title} {author} {genre}{ publicationYear}</li>)}
</ul>
 </>
  )
}

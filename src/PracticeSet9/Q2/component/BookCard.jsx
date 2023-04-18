import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { NavLink } from "react-router-dom";


const style1={

 
  padding: "0.8rem",
  borderRadius: "0.5rem",
  margin: "1rem",
  textDecoration:"none"
}

const style2={
  background: "#42f54e",
  color: "white",
  padding: "0.8rem",
  borderRadius: "0.5rem",
  margin: "1rem",
  textDecoration:"none"
}
export const BookCard = ({book,i}) => {
  const {id,
    title,
    author,
    image,
  }=book
  
const {addedToFav,favBookId,addtoRead,readId}=useContext(BookContext)
  
const isRead=readId.includes(id)
const styles ={
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid red",
  borderRadius: "1rem",
  padding: "1rem",
}
  return (
    <>
      <li
        key={id}
        style={styles}
      >
        <div style={{ display: "flex" }}>
          <p>{i}</p>
          <img src={image} alt="img" height={200} width={150} />
        </div>

        <p>Title:- {title}</p>

        <p>Author: {author}</p>

        {<button style={style1} onClick={()=>addtoRead(book)} disabled={isRead}>{isRead?"already read":"Mark as Read" }</button> } 

        {favBookId.includes(id)?<NavLink to="/favorites" style={style2}>go to Favorite</NavLink>:<button style={style2} onClick={()=>addedToFav(book)}>add to Favourite</button>}
      </li>
    </>
  );
};

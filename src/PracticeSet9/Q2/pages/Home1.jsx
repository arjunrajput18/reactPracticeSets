import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { BookCard } from "../component/BookCard";

export const Home1 = () => {
  const { bookData } = useContext(BookContext);

  return (
    <>
      
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "2.7rem",
          listStyleType: "none",
          
        }}
      >
        {bookData.map((book,i) => (
          <BookCard book={book} i={i+1} />
        ))}
      </ul>
    </>
  );
};

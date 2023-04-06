import React, { useState } from "react";

const BookComponent = ({ id, title, author, genre }) => {
  return (
    <>
      <li key={id}>
        <h1>{title}</h1>
        {author}
      </li>
    </>
  );
};

export const BookQ = ({ books }) => {
  const [show, setShow] = useState("All");

  const filterData =
    show === "All" ? books : books.filter(({ genre }) => genre === show);

  return (
    <>
      {["All", "Classic", "Dystopian", "Young Adult"].map((data) => (
        <button onClick={() => setShow(data)}>{data}</button>
      ))}
      <ul>
        {filterData.map(({ id, title, author, genre }) => (
          <BookComponent id={id} title={title} author={author} genre={genre} />
        ))}
      </ul>
    </>
  );
};

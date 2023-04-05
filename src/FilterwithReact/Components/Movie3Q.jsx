import React, { useState } from "react";
const movies3 = [
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    genre: "Action",
    releaseYear: 2008,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    genre: "Drama",
    releaseYear: 1972,
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    genre: "Drama",
    releaseYear: 1994,
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    genre: "horror",
    releaseYear: 1994,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    genre: "Action",
    releaseYear: 1994,
  },
  {
    title: "The Hangover",
    director: "Todd Phillips",
    genre: "Comedy",
    releaseYear: 2009,
  },
];

export const Movie3Q = () => {
  const [selectedGenre, setselectedGenre] = useState("All");

  const checkedhandler = (e) => setselectedGenre(e.target.value);

  const filterData =
    selectedGenre === "All"
      ? movies3
      : movies3.filter(({ genre }) => genre === selectedGenre);

  return (
    <>
      <form>
        {" "}
        {["All","Action", "Drama", "horror", "Comedy"].map((data) => (
          <label key={data}>
            <input
              type="radio"
              value={data}
              name="movie"
              checked={selectedGenre===data}
              onChange={checkedhandler}
            />
            {data}
          </label>
        ))}
      </form>
      <ul>
        {filterData.map(({ director, genre, releaseYear, title }) => (
          <li key={title}>
            {title} {director} {genre} {releaseYear}
          </li>
        ))}
      </ul>
    </>
  );
};

import { useState } from "react";

export default function MovieApp({ showMovies }) {
  const [checkedVal, setCheckedVal] = useState("All");

  const changeHandler = (e) => {
    setCheckedVal(e.target.value);
  };

  const filterData =
    checkedVal === "All"
      ? showMovies
      : showMovies.filter(({ year }) => {
          console.log(typeof year);
          console.log("k", typeof checkedVal);
          return year === Number(checkedVal);
        });
  return (
    <>
      <select onChange={changeHandler}>
        <option value={"All"}>All</option>
        <option value={2007}>2007</option>
        <option value={2008}>2008</option>
        <option value={2009}>2009</option>
        <option value={2010}>2010</option>
      </select>

      <ul>
        {filterData.map(({ title, year, rating }) => (
          <li key={title}>
            <div>Name: {title}</div>
            <div>Year: {year}</div>
            <div>Rating: {rating}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

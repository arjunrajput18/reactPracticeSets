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
          return year === Number(checkedVal);
        });


 const movieYear=showMovies.reduce((acc,{year})=>acc.includes(year)?acc:[...acc,year],["All"])
  return (
    <>
      <select onChange={changeHandler}>
      { movieYear.map((data)=><option value={data} key={data}>{data}</option>)}
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

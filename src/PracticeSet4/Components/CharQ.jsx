import React, { useState } from "react";
import { characters } from "../Data";
// Given an array of characters, build a Tab component in React that shows the name of characters on click of two buttons, one for heroes and other for villains. On click of “Show Heroes” button, a list of heroes should be displayed and on click of “Show Villains” button, a list of villains should be displayed on the DOM. Use useState Hook.
export const CharQ = () => {
  const [charData, setCharData] = useState([]);
  const [title,setTitle]=useState("")

  
  const clickHandler = (data) => {
    console.log(characters[data]);
    setCharData(()=>characters[data]);
    setTitle(()=>data)
  };

  return (
    <>
    
      <button onClick={() => clickHandler("heroes")}>Show Heroes</button>
      <button onClick={() => clickHandler("villains")}>Show Villains</button>
    <h1>{title}</h1>
      <ul>
        {charData.map(({ name, power, costume }, i) => (
          <li key={i}>{name} {power} {costume}</li>
        ))}
      </ul>
    </>
  );
};

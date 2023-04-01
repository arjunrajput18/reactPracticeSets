import React from "react";
import { useState } from "react";
// Build a React component called About that accepts three props: heading, your name and learning. Inside the component, render a <h1> tag with the heading prop, <h2> tag with your name and a button below that which says “Know More”. On the click of the button, show the learning in a <p> tag just below the button.

export const About = ({ heading, name, learning }) => {
  const [state, setState] = useState("");

  const clickHandler = () => {
    // console.log(state === "");
    if (state === "") {
      setState(learning);
    } else {
      setState("");
    }
  };

  return (
    <>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={clickHandler}>“Know More”</button>
      <p>{state}</p>
    </>
  );
};

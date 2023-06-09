import React from "react";
import { NavLink } from "react-router-dom";

export const ForumCard = ({data,noDetail}) => {
  const { id, question, answer }=data
  return (
    <>
      <li>
        <h2>{question}</h2>
        {noDetail && (
          <div>
            <NavLink>Up Vote</NavLink>{" "}
            <NavLink>Down Vote</NavLink>{" "}
            <NavLink to={`/answer/${id}`}>Answer</NavLink>{" "}
          </div>
        )}
        {!noDetail &&<p>{answer}</p>}
      </li>
    </>
  );
};

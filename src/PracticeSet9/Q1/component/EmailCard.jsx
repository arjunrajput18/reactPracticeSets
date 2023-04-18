import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EmailContext } from "../context/EmailContext";

export const EmailCard = ({ id, sender, subject, message, read,inbox }) => {
    const {clickHandler}=useContext(EmailContext)
    // console.log(id)
  return (
    <>
      <li key={id}>
        {/* {subject.includes("Re:")?<NavLink to={`/sent/${id}`}>{subject}</NavLink>:<NavLink to={`/inbox/${id}`}>{subject}</NavLink>} */}
        <NavLink to={`/${inbox?"inbox":"sent"}/${id}`}>{subject}</NavLink>
        {/* {<NavLink to={`/inbox/${id}`}>{subject}</NavLink>} */}
        {!read && <button onClick={()=>clickHandler(id)}>mark as Read</button>}
      </li>
    </>
  );
};

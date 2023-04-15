// import React, { useContext } from "react";
// import { TodoContext } from "../Context/TodoContext";
// id: 1,
// title: 'Complete practice set 7',
// description: 'Practice set 7 of React',

import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import { NavLink } from "react-router-dom";

// isCompleted: true,
export const TodoCard = ({ id, title, description, isCompleted ,hideLine,expandTodo,allDetails}) => {
    console.log("desc",description)
    console.log("desc",allDetails)
  const { markDoneHandler } = useContext(TodoContext);
  
  return (
    <>
      <li style={{textDecoration:!hideLine&&isCompleted?"line-through":""}} key={id}>
  
        <h2>{title}</h2>
        {/* <p>{description}</p> */}
        {allDetails &&<p>{description}</p>}
        <p>status:{isCompleted ? "Done" : "Not Done"}</p>
        {<button onClick={()=>markDoneHandler(id)}>{isCompleted?"Mark as not Done":"Mark as Done"}</button>}
        {expandTodo&& <NavLink to={`/todo/${id}`}>Expand Todo</NavLink>}
        <hr />
      </li>
    </>
  );
};

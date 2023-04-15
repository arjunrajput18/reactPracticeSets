import React, { useContext } from "react";
import { TodoCard } from "../Component/TodoCard";
import { TodoContext } from "../Context/TodoContext";

export const OpenTodo = () => {
    const {todoData}=useContext(TodoContext)

  const openTodo = todoData.filter(({ isCompleted }) => !isCompleted);
//   console.log(filterOpen);
  return (
    <>
        <h3>Total Todo {openTodo.length}</h3>
    <ul>
      {openTodo.map((data) => (
        <>

          <TodoCard {...data}  expandTodo  />
        </>
      ))}
      </ul>
    </>
  );
};

import React from "react";
import { TodoCard } from "../Component/TodoCard";

export const OpenTodo = ({ todoData }) => {
  const filterOpen = todoData.filter(({ isCompleted }) => !isCompleted);
  console.log(filterOpen);
  return (
    <>

    <ul>
      {filterOpen.map((data) => (
        <>
          <TodoCard {...data} />
        </>
      ))}
      </ul>
    </>
  );
};

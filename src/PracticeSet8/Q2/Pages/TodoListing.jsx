import React, { useContext } from "react";
import { TodoCard } from "../Component/TodoCard";
import { TodoContext } from "../Context/TodoContext";

export const TodoListing = () => {
  const { todoData } = useContext(TodoContext);
  return (
    <>
      <ul>
        {todoData.map((data) => (
          <>
            <TodoCard {...data} />
          </>
        ))}
      </ul>
    </>
  );
};

import React from "react";
import { TodoCard } from "../Component/TodoCard";

export const TodoListing = ({ todoData }) => {
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

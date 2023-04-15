import React, { useContext } from "react";
// import { useState } from 'react'
import { TodoCard } from "../Component/TodoCard";
import { TodoContext } from "../Context/TodoContext";

export const DoneTodo = () => {
  const { todoData } = useContext(TodoContext);
  // const [doneTodo,setDoneTodo]=useState([])
  //never ever keep setter function outside
  // setDoneTodo(doneTodo+1)//infinite render it will update everyTime. update honar ani parat tech setTodo update honar ani te repeat hoth rahnar.
  const doneTodo = todoData.filter(({ isCompleted }) => isCompleted);
  // setDoneTodo(filterTodo)wrong kel  infinite render
  return (
    <>
            <h3>Total Todo {doneTodo.length}</h3>
      <ul>
        {doneTodo.map((data) => (
          <>
            <TodoCard {...data}  hideLine  expandTodo />
          </>
        ))}
      </ul>
    </>
  );
};

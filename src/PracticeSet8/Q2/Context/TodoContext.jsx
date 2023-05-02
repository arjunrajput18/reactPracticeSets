import { createContext, useEffect, useState } from "react";
import React from "react";
import { fakeFetch2 } from "../../Data";



export const TodoContext = createContext();



export const TodoProvider = ({ children }) => {
  const [todoData, setTodoData] = useState([]);

  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { todos },
      } = await fakeFetch2(url);
      if (status === 200) {
        setTodoData(todos);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(todoData);
  useEffect(() => {
    fakeData("https://example.com/api/todos");
  }, []);

  const markDoneHandler = (idR) => {
    console.log(idR);

    console.log()
    setTodoData(
      todoData.map((item) =>
        item.id === idR ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };
  return (
    <>
      <TodoContext.Provider value={{ markDoneHandler, todoData }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};

import React, { useEffect, useState } from "react";
import { fakeFetch2 } from "../Data";

const Todolist = ({ todoData }) => {
  return (
    <>
      {todoData.map(({ title, desc, todos }, i) => (
        <div key={i}>
          <p>
            <strong>{title}</strong>: {desc}
          </p>
          <ol key={i}>
            {todos.map((data, i) => (
              <li key={i}>{data}</li>
            ))}
          </ol>
        </div>
      ))}
    </>
  );
};

export const TodoQ = () => {
  const [todoData, setTodoData] = useState([]);

  const fakeData = async (url) => {
    const {
      status,
      data: { todos },
    } = await fakeFetch2(url);
    status === 200 && setTodoData(todos);
  };

  useEffect(() => {
    fakeData("https://example.com/api/todos");
  }, []);

  return (
    <>
      <Todolist todoData={todoData} />
    </>
  );
};

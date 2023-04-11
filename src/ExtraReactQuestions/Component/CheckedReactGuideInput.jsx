import "./styles.css";
import { useState } from "react";

export  const  CheckedReactGuideInput=()=> {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Clean the house", completed: false },
    { id: 2, text: "Do laundry", completed: false },
    { id: 3, text: "Buy groceries", completed: false }
  ]);

  const taskCompleted = (event) => {
    const selectedValue = event.target.value;
    const filterData = tasks.map((task) =>
      task.text === selectedValue
        ? { ...task, completed: !task.completed }
        : { ...task, completed: task.completed }
    );
    console.log(filterData);
    setTasks(filterData);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            value={task.text}
            checked={task.completed}
            onChange={taskCompleted}
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "" }}
          >
            {task.text}
          </span>
        </div>
      ))}
    </div>
  );
}
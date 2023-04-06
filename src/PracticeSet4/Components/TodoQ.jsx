import React, { useState } from "react";
// Add a X button against each item and remove that task from the list on click of the button.
//*************nhi jamalaa */
// style={{textDecoration:isDone?"line-through":""}}
export const TodoQ = ({ todoItems }) => {
  // const {id,task,isDone}=todoItems

  const [selectedCross,setSelectedCross]=useState("")


  return (
    <>
      <ul>
        {todoItems.map(({ id, task, isDone }) => (
          <li key={id} style={{textDecoration:selectedCross?"line-through":"" }}>
            {task} 
            <button onClick={()=>clickHandler(task)} >X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

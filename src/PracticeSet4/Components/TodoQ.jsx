// import React, { useState } from "react";
// // Add a X button against each item and remove that task from the list on click of the button.
// //*************nhi jamalaa */
// // style={{textDecoration:isDone?"line-through":""}}
// export const TodoQ = ({ todoItems }) => {
//   // const {id,task,isDone}=todoItems

import { useState } from "react";

//   const [selectedCross,setSelectedCross]=useState("")

//   return (
//     <>
//       <ul>
//         {todoItems.map(({ id, task, isDone }) => (
//           <li key={id} style={{textDecoration:selectedCross?"line-through":"" }}>
//             {task}
//             <button onClick={()=>clickHandler(task)} >X</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// const ButtonComponent=()=>



export const TodoQ = ({ todoItems }) => {
  const [removeElement, setremoveElement] = useState(todoItems);
  //id
  //id==!id
  const removeHandler = (idR) => {
    console.log(idR);
    const filterData = removeElement.filter(({ id }) => id !== idR);

    setremoveElement(filterData);
  };
  return (
    <>
      <ul>
        {removeElement.map(({ id, task, isDone }) => {
          return (
            <li
              style={{ textDecoration: isDone ? "line-through" : "none" }}
              key={id}
            >
              {task} <button onClick={() => removeHandler(id)}>X</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};






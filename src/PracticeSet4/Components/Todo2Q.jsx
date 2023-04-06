// import React, { useState } from 'react'

// export const Todo2Q = ({todoItems2}) => {
// const [data,setData]=useState(false)
// // const [state,setState]=useState()
// const [pData,setPData]=useState([])

// const handlerClick=(idR)=>{
// // const filterData=todoItems2.filter(({id})=>id!==idR)

// setPData([...pData,idR])

// setData(!data)
// }

//   return (
//  <ul>
//     {todoItems2.map(({id,task,isDone})=><li style={{textDecoration:data && pData.includes(id)?"line-through":"none"}}>{task}<button onClick={()=>handlerClick(id)}>Mark as Done</button></li>)}
//  </ul>
//   )
// }
import React, { useState } from "react";

export function Todo2Q({ todoItems2 }) {
  const [items, setItems] = useState(todoItems2);
  // [{ id: 1, task: "Writing 1-page poem", isDone: false },{id:1,task:Gym,isDone:false , isDone:true}  { id: 3, task: "Shopping", isDone: false },
  // { id: 4, task: "Standup call", isDone: false }]
  
  function handleClick(id) {
    //2
    const newItems = items.map((item) => {
      if (item.id === id) {
        //1===2 F | 2===2
        return { ...item, isDone: !item.isDone };
        //{id:1,task:Gym,isDone:false , isDone:true}
      } else {
        return item;
        // { id: 1, task: "Writing 1-page poem", isDone: false },
      }
    });
    //
    setItems(newItems);
  }

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          style={{
            textDecoration: item.isDone ? "line-through" : "none",
            color: item.isDone ? "red" : "inherit"
          }}
        >
          {item.task}
          <button onClick={() => handleClick(item.id)}>Mark as Done</button>
        </li>
      ))}
    </ul>
  );
}

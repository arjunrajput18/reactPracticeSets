// import React from "react";
// import {useState} from "react"
// // Build a React component called MyGadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Create a button below all the listings which says “Highlight Expensive Gadget” and on click of the button add a lightgreen backgroundColor to the items which has a price more than 50000.

// export const MyGadgets = ({ products8 }) => {
//   const [isBorder,setIsBorder]=useState(false)
//     const handlerClick=()=>setIsBorder(!isBorder)

// return (<>
//     <ol>
//       {products8.map(({id,name,description,price})=><li style={{border:isBorder&& price>50000?"1px solid black":""}}>
//       name:{name}
//       description:{description}
//       price :{price}
//       </li>) }
//     </ol>
//     <button onClick={handlerClick}>“Highlight Expensive Gadgets"</button>
// </>
//   );
// };
import React from 'react'
import { useState } from 'react';
export const MyGadgets = ({ products8 }) => {
  const [showExpensive, setShowExpensive] = useState(false);
  const clickHandler = () => setShowExpensive(!showExpensive);
  const styleExpensive = price => showExpensive && price > 50000 ? "lightgreen" : null;
  return (
    <>
      <ol>
        {
          products8.map(({ id, name, description, price }) => <li key={id} style={{ backgroundColor: styleExpensive(price) }}>Name: {name} <br /> Description: {description} <br /> Price: {price}</li>)
        }
      </ol>
      <button onClick={clickHandler}>{showExpensive ? "Reset" : "Highlight Expensive Gadget"}</button>
    </>
  )
}
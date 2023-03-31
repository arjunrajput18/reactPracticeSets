import React from 'react'
// Build a React component called Gadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Add a border around the product details which has price above 50000.

export const Gadgets = ({products}) => {

const isPrice=(price)=>price>50000?"1px solid black":"none"

  return (
    <ul>

        {products.map(({ id, name, description, price})=>
        <li key={id}
        style={{border:isPrice(price)}}
        >name: {name} {" "}
        description:{description}{" "}
        price:{price}</li>
        )}
    </ul>
  )
}

import React from 'react'

export const Product = ({name,price}) => {
  return (
    <div>
        ProductName:<span style={{fontWeight:"bold" , color:"blue"}}> {name} </span>{" "}
        price:<span style={{fontStyle:'italic', color:"green"}}>{price}</span>
    </div>
  )
}

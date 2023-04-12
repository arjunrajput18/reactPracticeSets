import React from 'react'

export const ShowProduct = ({name,description,price,quantity}) => {
  return (
   <>
    <li key={name}>
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{quantity}</p>
    </li>
   </>
  )
}

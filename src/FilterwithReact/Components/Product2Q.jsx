import React, { useState } from 'react'
import { products2 } from '../Data'
// Create a React app that displays a list of products with their name, price, category, and availability. Implement buttons for each product category (e.g. electronics, clothing, food) and filter the displayed list of products to show only those in the selected category when the corresponding button is clicked, using the filter() function.
export const Product2Q = () => {
const [typeCategory,setTypeCategory]=useState(null)

const clickHandler=(type)=>{
    setTypeCategory(type)
}
const filterCategory=typeCategory?products2.filter(({category})=>category===typeCategory):products2
console.log(filterCategory)
  return (
    <>
    <button onClick={()=>{clickHandler("electronics")}}>electronics</button>
    <button onClick={()=>{clickHandler("clothing")}}>clothing</button>
    <button onClick={()=>{clickHandler("food")}}>food</button>
    <ul>
{filterCategory.map(({name,price,category,availability})=><li key={name}> {name} {price} {category} {availability?"yes":"no"}</li>)}
    </ul>
    </>
    )
}

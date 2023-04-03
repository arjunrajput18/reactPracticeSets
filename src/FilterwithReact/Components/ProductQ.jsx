import React from 'react'
import {  Products } from '../Data'
import { useState } from 'react'

// Create a React app that displays a list of products with their name, price, and category. Implement a feature that allows users to input a maximum price value and filters the displayed list of products to show only those whose price is less than or equal to the input value, using the filter() function.
export const ProductQ = () => {
const [inputPrice,setInputPrice]=useState("")//step1
const HandlerChange=(e)=>{
    setInputPrice(e.target.value)
}

const FilterData=Products.filter(({price})=>price<=inputPrice)//step2 
console.log(FilterData)
  return (
    <>
    <input type='number' onChange={HandlerChange}/> 
<ul>
    
        {FilterData.map(({price,name,id,category})=><li key ={id}>{name}{price}{category}</li>)} 
        {/* step3 */}
</ul>
    </>
  )
}

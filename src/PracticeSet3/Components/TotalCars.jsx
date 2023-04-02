import React from 'react'

export const TotalCars = ({cars}) => {
  
  // console.log(categories);
  const categoryCar=cars.reduce((acc,{ category})=>{
    if(acc[category]){
      acc[category]++
    }else{
      acc[category]=1
    }
    return acc
  },{})

// console.log(categoryCar.luxury)
    return (
  <>
    <h1>luxury:{categoryCar.luxury}</h1>
    <h1>sports:{categoryCar.sports}</h1>
  </>
  )
}

import React from 'react'

export const TotalCars = ({cars}) => {
  
  // console.log(categories);
  const {luxury,sports}=cars.reduce((acc,{ category})=>{
    if(acc[category]){
      acc[category]++
    }else{
      acc[category]=1
    }
    return acc
  },{})

    return (
  <>
    <h1>luxury:{luxury}</h1>
    <h1>sports:{sports}</h1>
  </>
  )
}

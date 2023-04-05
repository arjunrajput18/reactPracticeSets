import React, { useEffect } from 'react'

export const App2 = () => {

console.log("start")
useEffect(()=>{
    console.log("useEffect")

    return ()=>{
        console.log("inside return ")
    }
   
},[])
console.log("End")
  return (
   
    <div>App2
     {console.log("inside")}
    </div>
  )
}

// import React, { useState } from 'react'
// import { pets } from '../Data'
// // reate a React app that displays a list of pets with their name, type, age, and owner. Implement three buttons for each pet type (e.g. cat, dog, bird) and filter the displayed list of pets to show only those of the selected type when the corresponding button is clicked, using the filter() function.

// export const PetQ = () => {
// const [data,setData]=useState("")

// const typeHandler=(e)=>{
//     // console.log(e.target.value)
// setData(e.target.value)
// }
//     const filterType=pets.filter(({name,type})=>type===data)
//     // console.log(filterType)
//   return (
// <>
// <button onClick={typeHandler} value={"cat"}>cat</button>
// <button onClick={typeHandler} value={"dog"}>dog</button>
// <button onClick={typeHandler} value={"bird"}>bird</button>
// <ul>
//     {filterType.map(({name,type,age,owner,id})=><li key={id}>{name}{type}{age}{owner}</li>)}
// </ul>
// </>
//   )
// }

import React, { useState } from 'react'
import { pets } from '../Data'
// reate a React app that displays a list of pets with their name, type, age, and owner. Implement three buttons for each pet type (e.g. cat, dog, bird) and filter the displayed list of pets to show only those of the selected type when the corresponding button is clicked, using the filter() function.

export const PetQ = () => {
const [petType,setpetType]=useState(null)

const typeHandler=(type)=>{setpetType(type)
}
    const filterType=petType?pets.filter(({type})=>type===petType):pets
    // console.log(filterType)
  return (
<>
<button onClick={()=>typeHandler("cat")} >cat</button>
<button onClick={()=>typeHandler("dog")}>dog</button>
<button onClick={()=>typeHandler("bird")} >bird</button>
<ul>
    {filterType.map(({name,type,age,owner,id})=><li key={id}>{name}{type}{age}{owner}</li>)}
</ul>
</>
  )
}

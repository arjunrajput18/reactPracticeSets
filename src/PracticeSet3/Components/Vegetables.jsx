import React from 'react'
import {useState} from "react"
export const Vegetables = ({vegetables,data}) => {
const [state,setState]=useState(false)


const HandlerClick=()=>setState(!state)


return (
    <>
    <ol>
    {vegetables.map(({name,pickDate})=><li style={{color:pickDate===data&& state?"green":"black"}}>{name}:{pickDate}</li>)}
    </ol>
<button onClick={HandlerClick}>Highlight Fresh Vegetables</button>
</> )
}

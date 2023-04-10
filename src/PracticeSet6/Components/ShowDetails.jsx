import React, { useState } from 'react'

export const ShowDetails = ({showData}) => {
const [fullData,setFullData]=useState([])

const clickHandler=(data)=>{
const filterData=showData.filter(({title})=>title===data)
console.log(filterData)
setFullData(filterData)
}

  return (<>
<ol>
{showData.map(({title,description})=>
<div style={{padding:"0.5rem"}}>
<div><strong>title</strong>: {title}</div>
<div><strong>description</strong>: {description}</div>
<button onClick={()=>clickHandler(title)}>show Details</button>
</div>
)}
</ol>
{fullData.length===1 && <h2>Project Details</h2>}
<ol>
{ fullData.map(({title,description,technologies,completed})=>
<div style={{padding:"0.5rem"}}>
<div><strong>title</strong>: {title}</div>
<div><strong>description</strong>: {description}</div>
<span><strong>technologies</strong>:{technologies.map((technologies)=><span>{technologies } </span>)}</span>
<div><strong>completed</strong>:{completed?"true":"false"}</div>
</div>
)}
</ol>

</>
  )
}

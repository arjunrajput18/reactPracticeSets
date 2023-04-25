import React, { useState } from 'react'
// Build a React component called Article that accepts two props: title and content. Inside the component, render a <h1> tag with the title prop and a button below that which says “Know More”. On the click of the button, show the content in a <p> tag just below the button.
export const Article = ({title,content}) => {
const [knowMore,setKnowMore]=useState(false)


  return (
    <div>
<h1>{title}</h1>
<button onClick={()=>setKnowMore((knowMore)=>!knowMore)}>Know More</button>
{knowMore&&<p>{content}</p>}
    </div>
  )
}

import React, { useState } from 'react'
// Build a React component called Article that accepts two props: title and content. Inside the component, render a <h1> tag with the title prop and a button below that which says “Know More”. On the click of the button, show the content in a <p> tag just below the button.
export const Article = ({title,content}) => {
const [state,setState]=useState("")

const KnowMore=()=>{
    if(state===""){
        setState(content)
    }else{
        setState("")
    }

}
  return (
    <div>
<h1>{title}</h1>
<button onClick={KnowMore}>Know More</button>
    <p>{state}</p>
    </div>
  )
}

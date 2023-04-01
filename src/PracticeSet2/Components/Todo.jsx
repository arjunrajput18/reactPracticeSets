import React from 'react'

export const Todo = ({todoItems}) => {
const colorChecker= isCompleted=> isCompleted?"green":"red"
  return (
    <>
    {todoItems.map(({title,description,isCompleted})=>{
       return <div style={{color:colorChecker(isCompleted)}}>
       <h1>title:{title}</h1>
       <p> description:{description} </p>
        </div>
    })}

    </>
  )
}

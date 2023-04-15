import React from 'react'
// id: 1,
// title: 'Complete practice set 7',
// description: 'Practice set 7 of React',
// isCompleted: true,
export const TodoCard = ({id,title,description,isCompleted}) => {
  return (
    <>
<li>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>status:{isCompleted?"true":"false"}</p>
    <hr/>
</li>
    
    </>
  )
}

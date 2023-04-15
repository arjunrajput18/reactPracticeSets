import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { TodoContext } from '../Context/TodoContext'
import { TodoCard } from '../Component/TodoCard'

export const TodoDetail = () => {
    const {todoId}=useParams()
    const {todoData}=useContext(TodoContext)

const expandTodo=todoData.filter(({id})=>id===Number(todoId))
console.log("E",todoId)
  return (
<ul>
{expandTodo.map((data)=>
<>
<TodoCard {...data} allDetails hideLine />
</>
)}
</ul>
  )
}

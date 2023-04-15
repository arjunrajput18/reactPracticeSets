import React from 'react'
// import { useState } from 'react'
import { TodoCard } from '../Component/TodoCard'

export const DoneTodo = ({todoData}) => {
// const [doneTodo,setDoneTodo]=useState([])
// setDoneTodo(doneTodo+1)//infinite render it will update everyTime. update honar ani parat tech setTodo update honar ani te repeat hoth rahnar.
    const filterTodo=todoData.filter(({isCompleted})=>isCompleted)
    // setDoneTodo(filterTodo)wrong kel  infinite render
return (
<>
<ul>
{filterTodo.map((data)=><>
<TodoCard {...data}/>
</>)}
</ul>
</>
  )
}

import React from 'react'
import { CharQ } from './Components/CharQ'
import { SizeButton } from './Components/SizeButton'
import { MarketQ } from './Components/MarketQ'
import { TodoQ } from './Components/TodoQ'
import { Todo2Q } from './Components/Todo2Q'

export const Question1 = () => {
  return (
<CharQ/>
  )
}
export const Question2 = () => {
  return (
<SizeButton/>
  )
}


export const Question3=()=>{
  return (
    <MarketQ/>
  )
}

const todoItems = [
  {id: 1, task: "Writing 1-page poem", isDone: true},
  {id: 2, task: "Gym", isDone: false},
  {id: 3, task: "Shopping", isDone: false},
  {id: 4, task: "Standup call", isDone: true},
]
export const Question4=()=>{
  return (
    <TodoQ todoItems={todoItems}/>
  )
}

const todoItems2= [
  {id: 1, task: "Writing 1-page poem", isDone: false},
  {id: 2, task: "Gym", isDone: false},
  {id: 3, task: "Shopping", isDone: false},
  {id: 4, task: "Standup call", isDone: false},
]
export const Question5 = () => {
  return (
<Todo2Q todoItems2={todoItems2}/>
  )
}

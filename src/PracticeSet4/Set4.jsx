import React from 'react'
import { CharQ } from './Components/CharQ'
import { SizeButton } from './Components/SizeButton'
import { MarketQ } from './Components/MarketQ'
import { TodoQ } from './Components/TodoQ'
import { Todo2Q } from './Components/Todo2Q'
import { BookQ } from './Components/BookQ'
import { GameQ } from './Components/GameQ'

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
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
  { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic" },
  { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 5, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
  { id: 6, title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult" },
  { id: 7, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Young Adult" },
];

export const Question6=()=>{
  return (
    <BookQ books={books}/>
  )
}


export const Question7=()=>{
  
  return (
    <GameQ/>
  )
}
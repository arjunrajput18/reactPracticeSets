import React from 'react'
import { ProductQ } from './Components/ProductQ'
import { TodoQ } from './Components/TodoQ'
import { HabitTracker } from './Components/HabitTracker'
import { VideoLibrary } from './Components/VideoLibrary'

export const Question1 = () => {
  return (
   <ProductQ />
  )
}

export const Question2 = () => {
    return (
     <TodoQ />
    )
  }
  
  export const Question3 = () => {
    return (
     <HabitTracker />
    )
  }
  
  export const Question4 = () => {
    return (
     <VideoLibrary/>
    )
  }
  export const Question5 = () => {
    return (
     <></>
    )
  }
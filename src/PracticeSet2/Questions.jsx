import React from 'react'
import  {Question1,Question2, Question3,Question4,Question5, Question6}    from './Set2'


// Create a React component called Greeting that receives a name prop and displays a message like "Hello, name!" on the DOM.
export const Questions = () => {
  return (
    <ol>
    <li><Question1 /></li>
    <hr />
    <li><Question2 /></li>
    <hr />

    <li><Question3 /></li>
    <hr />
    <li><Question4 /></li>
    <hr />
    <li><Question5 /></li>
    <hr />
    <li><Question6 /></li>
    <hr />
  </ol>
  )
}








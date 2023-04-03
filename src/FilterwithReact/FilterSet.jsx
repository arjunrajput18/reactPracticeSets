import React from 'react'
import {Employees} from "./Components/Employees"
import { ProductQ } from './Components/ProductQ'
import {BookQ} from "./Components/BookQ"
import { MovieQ } from './Components/MovieQ'

// Create a React app that displays a list of employees with their name, age, position, and salary. Implement a feature that allows users to input a salary value and filters the displayed list of employees to show only those whose salary is greater than or equal to the input value, using the filter() function.
export const Question1 = () => {
  return (
   <Employees/>
  )
}
// Create a React app that displays a list of products with their name, price, and category. Implement a feature that allows users to input a maximum price value and filters the displayed list of products to show only those whose price is less than or equal to the input value, using the filter() function.
export const Question2 = () => {
  return (
   <ProductQ/>
  )
}

// Create a React app that displays a list of books with their title, author, genre, and publication year. Implement a feature that allows users to input a year value and filters the displayed list of books to show only those whose publication year is greater than or equal to the input value, using the filter() function.

export const Question3 = () => {
  return (
   <BookQ/>
  )
}
// Implement a feature that allows users to input a rating value and filters the displayed list of movies to show only those whose rating is greater than or equal to the input value, using the filter() function.


export const Question4 = () => {
  return (
   <MovieQ/>
  )
}

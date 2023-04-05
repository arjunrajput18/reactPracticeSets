import React from 'react'
import {Employees} from "./Components/Employees"
import { ProductQ } from './Components/ProductQ'
import {BookQ} from "./Components/BookQ"
import { MovieQ } from './Components/MovieQ'
import { PetQ } from './Components/PetQ'
import {Product2Q} from "./Components/Product2Q"
import { Book2Q } from './Components/Book2Q'
import { Movie2Q } from './Components/Movie2Q'
import { RestaurantQ } from './Components/RestaurantQ'
import { JobQ } from './Components/JobQ'
import { ShowQ } from './Components/ShowQ'
import { GymQ } from './Components/GymQ'
import { ShampooQ } from './Components/ShampooQ'
import { Movie3Q } from './Components/Movie3Q'
import { CarQ } from './Components/CarQ'
import { ClothQ } from './Components/ClothQ'

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

// reate a React app that displays a list of pets with their name, type, age, and owner. Implement three buttons for each pet type (e.g. cat, dog, bird) and filter the displayed list of pets to show only those of the selected type when the corresponding button is clicked, using the filter() function.
//buttonQuestion
export const Question5 = () => {
  return (
   <PetQ/>
  )
}


// Create a React app that displays a list of products with their name, price, category, and availability. Implement buttons for each product category (e.g. electronics, clothing, food) and filter the displayed list of products to show only those in the selected category when the corresponding button is clicked, using the filter() function.
export const Question6= () => {
  return (
   <Product2Q/>
  )
}
// Create a React app that displays a list of books with their title, author, genre, and publication year. Implement buttons for each book genre (e.g. fiction, non-fiction, mystery) and filter the displayed list of books to show only those in the selected genre when the corresponding button is clicked, using the filter() function.

export const Question7= () => {
  return (
   <Book2Q />
  )
}



export const Question8= () => {
  return (
   <Movie2Q />
  )
}



export const Question9= () => {
  return (
   <RestaurantQ />
  )
}


export const Question10= () => {
  return (
   <JobQ />
  )
}

// Create a React app that displays a list of events with properties like name, date, location, and ticket price. Implement a checkbox for each event type (e.g. music, sports, theater) and filter the displayed list of events to show only those with the selected event type(s), using the filter() function.
export const Question11= () => {
  return (
   <ShowQ/>
  )
}

export const Question12= () => {
  return (
   <GymQ/>
  )
}
export const Question13= () => {
  return (
   <ShampooQ/>
  )
}
export const Question14= () => {
  return (
   <Movie3Q/>
  )
}

export const Question15= () => {
  return (
   <CarQ/>
  )
}

export const Question16= () => {
  return (
   <ClothQ/>
  )
}
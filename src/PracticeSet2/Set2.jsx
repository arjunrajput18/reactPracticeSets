import React from 'react'
import {Greetings} from  "./Components/Greetings"
import {Product} from  "./Components/Product"
import {UserProfile} from  "./Components/UserProfile"
import {Gadgets} from  "./Components/Gadgets"
import { Phones } from './Components/Phones'
import { Article} from './Components/Article'
export const Question1 = () => {
  return (
    <div>
        <Greetings name={"Arjun"}/>
    </div>
  )
}


//Build a Product component that receives product name and price as props and displays them on DOM.

// The name should be in bold and blue in color
// Price should be in italics and green in color

export const Question2 = () => {
  return (
 <Product name={"Laptop"} price={2333}/>
  )
}


// Build a React component called UserProfile that receives an object representing a user as prop and display the details on the DOM.

// Data:
const userData = {
    name: 'John',
    age: 25,
    email: 'john@example.com',
  }
export const Question3 = () => {
    
  return (
<UserProfile data={userData}/>
  )
}

export const Question4 = () => {
    const products = [
        {
          id: 1,
          name: 'keyboard',
          description: 'Logitech Mechanical Keyboard',
          price: 2000,
        },
        { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
        {
          id: 3,
          name: 'monitor',
          description: 'Lenovo 32-inch display Monitor',
          price: 10000,
        },
        { id: 4, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
        {
          id: 5,
          name: 'speakers',
          description: 'Creative Desktop Speakers',
          price: 5000,
        },
        {
          id: 6,
          name: 'headphones',
          description: 'Sony over-the-ear wired Headphones with mic',
          price: 1500,
        },
        { id: 7, name: 'mobile', description: 'iPhone 12', price: 90000 },
      ]
    return (
  <Gadgets products={products}/>
    )
  }


  export const Question5 = () => {
    const products1 = [
        {
          id: 1,
          name: 'keyboard',
          description: 'Logitech Mechanical Keyboard',
          price: 2000,
        },
        { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
        { id: 3, name: 'mobile', description: 'iPhone 13', price: 61000 },
        {
          id: 4,
          name: 'monitor',
          description: 'Lenovo 32-inch display Monitor',
          price: 10000,
        },
        { id: 5, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
        {
          id: 6,
          name: 'speakers',
          description: 'Creative Desktop Speakers',
          price: 5000,
        },
        {
          id: 7,
          name: 'headphones',
          description: 'Sony over-the-ear wired Headphones with mic',
          price: 1500,
        },
        { id: 8, name: 'mobile', description: 'iPhone 12', price: 90000 },
      ]
    return (
      <Phones products1={products1}/>
    )
  }

  const title = 'React is awesome'
  const content = 'React is a JavaScript library for building user interfaces.'

  export const Question6 = () => {
    return (
     <Article title={title} content={content}/>
    )
  }
  export const Question7 = () => {
    return (
     <About  title={title} content={content}/>
    )
  }

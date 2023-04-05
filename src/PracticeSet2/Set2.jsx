import React from 'react'
import {Greetings} from  "./Components/Greetings"
import {Product} from  "./Components/Product"
import {UserProfile} from  "./Components/UserProfile"
import {Gadgets} from  "./Components/Gadgets"
import { Phones } from './Components/Phones'
import { Article} from './Components/Article'
import {About} from "./Components/About"
import {MyGadgets } from "./Components/MyGadgets "
import {ColorPicker} from "./Components/ColorPicker"
import {Todo} from "./Components/Todo"

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
    
  const heading = 'About Me'
  const name = "Arjunsingh Rajput"
  const learning = 'I am learning React JS currently at neoG Camp.'
  
    return (
     <About  heading={heading} name={name} learning={learning} />
    )
  }

  
  export const Question8 = () => {
    
    const products8 = [
        {
          id: 1,
          name: 'keyboard',
          description: 'Logitech Mechanical Keyboard',
          price: 2000,
        },
        { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
        {
          id: 3,
          name: 'speakers',
          description: 'Bose L1 Pro32 Portable',
          price: 256000,
        },
        { id: 4, name: 'mobile', description: 'iPhone 13', price: 61000 },
        {
          id: 5,
          name: 'monitor',
          description: 'Lenovo 32-inch display Monitor',
          price: 10000,
        },
        { id: 6, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
        {
          id: 7,
          name: 'speakers',
          description: 'Creative Desktop Speakers',
          price: 5000,
        },
        {
          id: 8,
          name: 'headphones',
          description: 'Sony over-the-ear wired Headphones with mic',
          price: 1500,
        },
        { id: 9, name: 'mobile', description: 'iPhone 12', price: 90000 },
      ]
      return (
       <MyGadgets   products8={products8}  />
      )
    }

    export const Question9 = () => {
        const red = '#EE4B2B'
        const blue = '#89CFF0'
        const green = '#7FFFD4'
      
        return (
       <ColorPicker red={red} green={green} blue={blue}/>
      )
    }

    // Build a "Todo" React component that takes a prop called "todoItems". Inside the component, Display the title of a to-do item in a heading tag and the description in a paragraph. If the todoItem is completed, show the title and description in green color otherwise in red color.


export const Question10 = () => {
    const todoItems = [
        {
          id: 1,
          title: 'Complete practice set',
          description: 'Practice set 1 of React',
          isCompleted: true,
        },
        {
          id: 2,
          title: 'Attend revision session',
          description: 'Revision session of React',
          isCompleted: false,
        },
        {
          id: 3,
          title: 'Watch recording',
          description: 'Live session recording of React',
          isCompleted: true,
        },
        {
          id: 4,
          title: 'Attend DSH',
          description: 'Doubt Solving Hours of React',
          isCompleted: false,
        },
        {
          id: 5,
          title: 'Complete practice set',
          description: 'Practice set 2 of React',
          isCompleted: false,
        },
      ]
  return (
 <Todo todoItems={todoItems} />
  )
}






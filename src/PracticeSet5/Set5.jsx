import React from 'react'
import { UsersQ } from './Components/UsersQ'
import { ProductQ } from './Components/ProductQ'
import { Product2Q } from './Components/Product2Q'
import { ShowImgQ } from './Components/ShowImgQ'
import { Users2Q } from './Components/Users2Q'

export const Question1 = () => {
  return (
    <>
       <UsersQ/> 
    </>
  )
}


export const Question2 = () => {
  return (
    <>
       <ProductQ/> 
    </>
  )
}
export const Question3 = () => {
  return (
    <>
       <Product2Q/> 
    </>
  )
}

export const Question4 = () => {
  return (
    <>
       <ShowImgQ  height={250} width={150}  heading={"User Profile"}/> 
    </>
  )
}

export const Question5 = () => {
  return (
    <>
       <Users2Q/> 
    </>
  )
}
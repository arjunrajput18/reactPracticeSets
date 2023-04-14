import React, { useContext } from 'react'
import { Cart2Context } from '../context/Cart2Context'
import { ProductCard } from '../component/ProductCard'

export const MyCart1= () => {
  const {cartData}=useContext(Cart2Context)
  return (
   <ul>
   <h1>My Cart Item:{cartData.length}</h1>
{cartData.map((data,i)=><ProductCard key={i}{...data} hideDetails={false} />)}

   </ul>
  )
}

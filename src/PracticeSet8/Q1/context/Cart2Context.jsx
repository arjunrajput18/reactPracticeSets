import {createContext, useState} from "react"

export const Cart2Context=createContext();

export const CartProvider=({children})=>{
const [cartData,setCartData]=useState([])


const clickHandler=(product)=>{
    setCartData([...cartData,product])
}

    console.log(cartData)
    return(
        <Cart2Context.Provider value={{cartData,clickHandler}}>
{children}
        </Cart2Context.Provider>
    )
}
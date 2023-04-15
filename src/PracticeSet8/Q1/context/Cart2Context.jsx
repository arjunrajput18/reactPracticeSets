import { createContext, useState } from "react";

export const Cart2Context = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const clickHandler = (product) => {
    setCartData([...cartData, product]);
  };
  const removehandler=(data)=>{
    setCartData(cartData.filter(({id})=>data.id!==id))
  }

//   console.log(cartData);
  return (
    <Cart2Context.Provider value={{ cartData, clickHandler,removehandler }}>
      {children}
    </Cart2Context.Provider>
  );
};

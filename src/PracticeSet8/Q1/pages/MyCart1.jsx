import React, { useContext } from "react";
import { Cart2Context } from "../context/Cart2Context";
import { ProductCard } from "../component/ProductCard";

export const MyCart1 = () => {
  const { cartData,removehandler } = useContext(Cart2Context);

const totalPrice=cartData.reduce((acc,{price})=>acc+price,0)

  return (
    <ul>
      <h1>My Cart Item:{cartData.length}</h1>
      {cartData.map((data, i) => (
        <>
          <ProductCard key={i} {...data} hideDetails={false} />
          <button onClick={() => removehandler(data)}>Remove to cart</button>
        </>
      ))}
      <h2>Total Cost :{totalPrice}</h2>
    </ul>
  );
};

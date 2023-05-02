import React from "react";
import { Question2 } from "./Sets8";
import { BrowserRouter as Router } from "react-router-dom";
import "./Style.css";
import { Cart2Context, CartProvider } from "./Q1/context/Cart2Context";
import { WishlistProvider } from "./Q1/context/WishListContext";
import { TodoProvider, TodoContext } from "./Q2/Context/TodoContext";
import {  ForumProvider } from "./Q3/context/ForumContext";

export { Cart2Context };
export { TodoContext };
export const Questions = () => {
  return (
    <ol>
      <Router>
        <li>
          <CartProvider>
            <WishlistProvider>{/* <Question1 /> */}</WishlistProvider>
          </CartProvider>
        </li>
        <hr />
        <li>
          <TodoProvider>
            <Question2 />
          </TodoProvider>
        </li>
        <hr/>
        <li>
        <ForumProvider>
        {/* <Question3/> */}
        </ForumProvider>
        </li>
      </Router>
    </ol>
  );
};

//1) BrowserRouter
//2) NavBar && Routes
//3) display map
//4)visit item ssati product details banvyla lagel

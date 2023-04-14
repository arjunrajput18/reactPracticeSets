import React from "react";
import { Question1 } from "./Sets8";
import { BrowserRouter as Router } from "react-router-dom";
import "./Style.css";
import { Cart2Context, CartProvider } from "./Q1/context/Cart2Context";

export { Cart2Context };
export const Questions = () => {
  return (
    <ol>
      <li>
        <Router>
          <CartProvider>
            <Question1 />
          </CartProvider>
        </Router>
      </li>
      <hr />
    </ol>
  );
};

//1) BrowserRouter
//2) NavBar && Routes
//3) display map
//4)visit item ssati product details banvyla lagel

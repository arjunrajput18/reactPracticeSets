import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ProductListing } from "./Q1/pages/ProductListing";
import { NavBar } from "./Q1/component/NavBar";
import { MyCart1 } from "./Q1/pages/MyCart1";
import { MyWishlist } from "./Q1/pages/MyWishlist";
import { fakeFetch, fakeFetch2 } from "./Data";
import { ProductDetails } from "./Q1/pages/ProductDetails";
import { TodoListing } from "./Q2/Pages/TodoListing";
import { NavBar2 } from "./Q2/Component/NavBar2";
import { DoneTodo } from "./Q2/Pages/DoneTodo";
import { OpenTodo } from "./Q2/Pages/OpenTodo";

export const Question1 = () => {
  const [productData, setProductData] = useState([]);
  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { products },
      } = await fakeFetch(url);
      if (status === 200) {
        setProductData(products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/products");
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ProductListing productData={productData} />}
        />
        <Route path="/cart" element={<MyCart1 />} />
        <Route path="/wishlist" element={<MyWishlist />} />
        <Route
          path="/product/:productId"
          element={<ProductDetails productData={productData} />}
        />
      </Routes>
    </>
  );
};
//for systematic purpose we used like /product  if we write in navbar /product it will blank but we pass after that /product/id id is 1 it will show first product

export const Question2 = () => {
  const [todoData, setTodoData] = useState([]);

  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { todos },
      } = await fakeFetch2(url);
      if (status === 200) {
        setTodoData(todos);
      }
    } catch (error) {
      console.log(error);
    }
  };
console.log(todoData);
useEffect(()=>{
  fakeData("https://example.com/api/todos");
},[])

  return (
    <>
    <h1>Todos</h1>
      <NavBar2/>
      <Routes>
        <Route path="/" element={<TodoListing todoData={todoData}/>}></Route>
        <Route path="/done" element={<DoneTodo todoData={todoData}/>}></Route>
        <Route path="/open" element={<OpenTodo todoData={todoData}/>}></Route>
      </Routes>
    </>
  );
};

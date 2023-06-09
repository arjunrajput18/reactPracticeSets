import React, {  useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ProductListing } from "./Q1/pages/ProductListing";
import { NavBar } from "./Q1/component/NavBar";
import { MyCart1 } from "./Q1/pages/MyCart1";
import { MyWishlist } from "./Q1/pages/MyWishlist";
import { fakeFetch } from "./Data";
import { ProductDetails } from "./Q1/pages/ProductDetails";
import { TodoListing } from "./Q2/Pages/TodoListing";
import { NavBar2 } from "./Q2/Component/NavBar2";
import { DoneTodo } from "./Q2/Pages/DoneTodo";
import { OpenTodo } from "./Q2/Pages/OpenTodo";
import { TodoDetail } from "./Q2/Pages/TodoDetail";
import {Home} from "./Q3/pages/Home"
import { Answer } from "./Q3/pages/Answer";
import { Questions } from "./Q3/pages/Questions";


export const Question1 = () => {
  const [productData, setProductData] = useState([]);
  const [loading,setLoading]=useState(true)
  const[errorData,setErrorData]=useState()
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
      setErrorData(error);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/products");
  }, []);

  return (
    <>
{
  loading?<p>loading...</p>:errorData?<p>{errorData.message}</p>: <div>
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
      </div>
}

   
    </>
  );
};
//for systematic purpose we used like /product  if we write in navbar /product it will blank but we pass after that /product/id id is 1 it will show first product

export const Question2 = () => {
  return (
    <>
    <h1>Todos</h1>
      <NavBar2/>
      <Routes>
        <Route path="/" element={<TodoListing />}></Route>
        <Route path="/done" element={<DoneTodo />}></Route>
        <Route path="/open" element={<OpenTodo />}></Route>
        <Route path="/todo/:todoId" element={<TodoDetail/>}></Route>
      </Routes>
    </>
  );
};

export const Question3=()=>{
return (<>
 
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/question" element={<Questions/>}></Route>
  <Route path="/answer/:answerId" element={<Answer/>}></Route>
</Routes>
</>)
}

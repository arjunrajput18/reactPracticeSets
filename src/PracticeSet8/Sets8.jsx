import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductListing } from "./Q1/pages/ProductListing";

import { NavBar } from "./Q1/component/NavBar";
import { MyCart1 } from "./Q1/pages/MyCart1";
import { MyWishlist } from "./Q1/pages/MyWishlist";
import { fakeFetch } from "./Data";
import { ProductDetails } from "./Q1/pages/ProductDetails";

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
        <Route path="/product/:productId" element={<ProductDetails productData={productData} />} />
      </Routes>
    </>
  );
};
//for systematic purpose we used like /product  if we write in navbar /product it will blank but we pass after that /product/id id is 1 it will show first product 
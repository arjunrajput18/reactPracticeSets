import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductCard } from "../component/ProductCard";

export const ProductDetails = ({ productData }) => {
  const { productId } = useParams();
  console.log(productId);

  const getProduct = (products, productID) =>
    products.find(({ id }) => id === Number(productID));

  const product = getProduct(productData, productId);
  console.log(product);
  return (
    <>
      <ul>
        <ProductCard {...product} />
      </ul>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NavLink to="/">See All</NavLink>
      </div>
    </>
  );
};

//justifyConent is property of flex

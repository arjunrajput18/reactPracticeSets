import React from "react";

export const ButtonComponent = ({ product, setSortedProduct }) => {
 
  const clickHandler = (sortBy) => {
    let sortedArray;
    if (sortBy === "lowToHigh") {
      sortedArray = [...product].sort((a, b) => a.price - b.price);
    } else if (sortBy === "hightoLow") {
      sortedArray = [...product].sort((a,b) =>b.price-a.price);
    } else {
      sortedArray = [...product];
    }
    setSortedProduct(sortedArray);
  };

  return (
    <>
      <button onClick={() => clickHandler("lowToHigh")}>Low to High</button>
      <button onClick={() => clickHandler("hightoLow")}>High to Low</button>
      <button onClick={clickHandler}>Reset</button>
    </>
  );
};

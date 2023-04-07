import React, { useEffect, useState } from "react";
import { fakeFetch2 } from "../Data";
// In the above question after you have listed all the items, add a button which says “Filter by Price”. On click of the button, display only the items with price less than 100.

// fakeFetch2

export const Product2Q = () => {
  const [productData, setProductData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const fakeData = async () => {
    const {
      status,
      data: { products },
    } = await fakeFetch2("https://example.com/api/products");

    if (status === 200) {
      setProductData(products);
      setFilterData(products);
    }
  };

  useEffect(() => {
    fakeData();
  }, []);

  const clickHandler = (type) => {
    if (type === "More Than 20 quantity") {
      const filterproductData = productData.filter(
        ({ name, price, quantity }) => quantity > 20
      );
      setFilterData(filterproductData);
    } else if (type === "Filter by Price") {
      const priceFilter = productData.filter(
        ({ name, price, quantity }) => price < 100
      );
      setFilterData(priceFilter);
    } else {
      setFilterData(productData);
    }
  };

  return (
    <>
      <button onClick={() => clickHandler("All")}>All</button>
      <button onClick={() => clickHandler("More Than 20 quantity")}>
        More Than 20 quantity
      </button>
      <button onClick={() => clickHandler("Filter by Price")}>
        Filter by Price
      </button>

      <ul>
        {filterData.map(({ name, price, quantity }) => (
          <li key={name}>
            {name} {price} {quantity}
          </li>
        ))}
      </ul>
    </>
  );
};

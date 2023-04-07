import React, { useEffect, useState } from "react";
import { fakeFetch2 } from "../Data";

// Create a React component that fetches products data from an API endpoint using useEffect hook and display products (name, price, quantity) as a list on the screen using the useState hook.

// a. Add a button, on click of which it displays only the items with more than 20 as quantity.
export const ProductQ = () => {
  const [showData, setShowData] = useState([]);
  const [errorData, setErrorData] = useState("");
const [moreThan20,setMoreThan20]=useState(true)
const [toggleData,setToggleData]=useState([])
  const fakeData = async () => {
    try {
      const {
        status,
        data: { products },
      } = await fakeFetch2("https://example.com/api/products");

      if(status === 200) {
        setShowData(products);
        setToggleData(products);
      } 
    } catch ({ status, message }) {
      setErrorData(`${status} ${message}`);
    }
  };

  useEffect(() => {
    fakeData();
  }, []);


const clickHandler=()=>{

   const  filterData=moreThan20?showData.filter(({quantity})=>quantity>20):toggleData
   setMoreThan20(!moreThan20)
    setShowData(filterData)
}

  return (
    <>
    <button onClick={clickHandler}>Show Button more than 20 quantity</button>
          <ul>
        {showData.map(({ name, price, quantity }) => (
          <li key={name}>{name}</li>
        ))}
        {errorData && <p>{errorData}</p>}
      </ul>

    </>
  );
};

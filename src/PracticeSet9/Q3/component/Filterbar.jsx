import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export const Filterbar = () => {

const {filterByPrice,searchHandler}=useContext(FoodContext)


  return (
    <div style={{margin:"1rem"}}>
      <input
        placeholder="Serach Food Here" onChange={(e)=>searchHandler(e)}
      />
        <label>
          <input type="checkBox" value={"veg"} />
          Veg
        </label>
        <label>
          <input type="checkBox"   value={"spicy"}/>
          Spicy
        </label>
        <label>
          <input type="radio"  onChange={(e)=>filterByPrice(e)} name={"sortByPrice"} value={"lowToHigh"}/>
          Spicy (price) Low to High
        </label> <label>
          <input type="radio"  onChange={(e)=>filterByPrice(e)} value={"highToLow"} name={"sortByPrice"} />
          Sort (price) High to Low
        </label>
    </div>
  );
};

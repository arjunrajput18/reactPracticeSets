import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import { MenuCard } from "../component/MenuCard";
import { Filterbar } from "../component/Filterbar";

export const Menu = () => {
  console.log("222");
  const { filterData } = useContext(FoodContext);
console.log("menu",filterData)
  return (
    <>
      <Filterbar />
      <ul>
        {filterData.map((data) => (
          <>
            <MenuCard foodMenu={data} key={data.id} />
          </>
        ))}
      </ul>
    </>
  );
};

import React, { useState } from "react";
export const clothes = [
  { name: "Cotton T-Shirt", brand: "Hanes", size: "Large", price: 15.99 },
  { name: "Slim-Fit Jeans", brand: "Levi's", size: "Small", price: 79.5 },
  {
    name: "Hooded Sweatshirt",
    brand: "Champion",
    size: "Extra-large",
    price: 35.99,
  },
  { name: "Athletic Shorts", brand: "Nike", size: "Small", price: 25.0 },
  { name: "Polo Shirt", brand: "Ralph Lauren", size: "Medium", price: 89.5 },
  {
    name: "Sweater",
    brand: "Tommy Hilfiger",
    size: "Extra-large",
    price: 69.99,
  },
];
export const ClothQ = () => {
  const [selectedCloth, setSelectedCloth] = useState("All");
const filterData=selectedCloth==="All"?clothes:clothes.filter(({size})=>size===selectedCloth)
  return (
    <>
      <form>
        {["All", "Large", "Small", "Extra-large", "Medium"].map((data, i) => (
          <label>
            <input
              type="radio"
              name="dress"
              value={data}
              checked={data===selectedCloth}
              onChange={(e) => setSelectedCloth(e.target.value)}
            />{data}
          </label>
        ))}
      </form>
<ul>
   {filterData.map(({name,brand,size,price})=><li>{name} {brand} {size} {price}</li>)} 
</ul>

    </>
  );
};

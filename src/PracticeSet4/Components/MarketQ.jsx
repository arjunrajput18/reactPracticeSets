import React, {useState } from "react";

const itemList = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
];
// a.  Build a React component that displays a list of items. Display fruits in orange color and vegetables in green color.
export const MarketQ = () => {
  const [selectedCategory, setSelectedCategory] = useState(itemList);
  const clickHandler = (data) => {
    const FilterData=data==="All"?itemList: itemList.filter(({ category }) => category === data);
    setSelectedCategory(FilterData);
  };

  return (
    <>
   
{
["All","Fruit","Vegetable"].map((data)=><button onClick={()=>clickHandler(data)}>{data}</button>)
}

      <ul>
        {selectedCategory.map(({ name, category }) => (
          <li key={name} style={{color:category==="Fruit"?"orange":"green"}}>
            {name} {category}
          </li>
        ))}
      </ul>
    </>
  );
};

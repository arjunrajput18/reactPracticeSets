import React, { createContext, useEffect, useState } from "react";
import { fakeFetch3 } from "../../Data";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { menu },
      } = await fakeFetch3(url);
      if (status === 200) {
        console.log("1", menu);
        setMenuData(menu);
        setFilterData(menu);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/menu");
  }, []);

  // const spicyHandler = (e) => {
  //   // const val=e.target.value

  //   const isChecked = e.target.checked;
  //   if (isChecked) {
  //     const spicyFilter = menuData.filter(
  //       ({ is_spicy, is_vegetarian }) => is_spicy
  //     );
  //     setFilterData(spicyFilter);
  //   } else {
  //     setFilterData(menuData);
  //   }
  // };

  const searchHandler = (e) => {
    const val = e.target.value.toLowerCase();
    const filterSearch = menuData.filter((data) =>
      data.name.toLowerCase().includes(val)
    );
    setFilterData(()=>filterSearch);
  };

  const filterByPrice = (e) => {
    const val = e.target.value;
    // const checked = e.target.checked;

    const filterRadio =
      val === "lowToHigh"
        ? [...filterData].sort((a, b) => a.price - b.price)
        : [...filterData].sort((a, b) => b.price - a.price);
    console.log(val);
    console.log(filterRadio);
    setFilterData(filterRadio);
  };

  return (
    <FoodContext.Provider
      value={{ menuData, filterData, filterByPrice, searchHandler }}
    >
      {children}
    </FoodContext.Provider>
  );
};

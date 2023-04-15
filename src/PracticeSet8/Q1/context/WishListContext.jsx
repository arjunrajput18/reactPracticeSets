import { createContext, useState } from "react";

export const WishListContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishListData, setWishListData] = useState([]);

  const wishListHandler = (product) => {
    setWishListData([...wishListData, product]);
  };

  const removeWishlistHandler=(idR)=>{
    setWishListData(wishListData.filter(({id})=>id!==idR))
  }
  console.log(children);
  return (
    <WishListContext.Provider value={{ wishListData, wishListHandler,removeWishlistHandler }}>
      {children}
    </WishListContext.Provider>
  );
};

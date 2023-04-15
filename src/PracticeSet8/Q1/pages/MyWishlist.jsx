import React, { useContext } from "react";
import { WishListContext } from "../context/WishListContext";
import { ProductCard } from "../component/ProductCard";

export const MyWishlist = () => {
  const { wishListData, removeWishlistHandler } = useContext(WishListContext);

  return (
    <>
    <h1>Wishlist Total :{wishListData.length}</h1>
    <ul>
      {wishListData.map((data) => (
        <>
          <ProductCard {...data} />
          <button onClick={() => removeWishlistHandler(data.id)}>
            Remove from Wishlist
          </button>
          <hr />
        </>
      ))}
    </ul>
    </>
  );
};

import { useContext } from "react";
import { ProductCard } from "../component/ProductCard";
import { Cart2Context } from "../context/Cart2Context";
import { WishListContext } from "../context/WishListContext";
// import { WishlistProvider } from "../context/WishListContext";

export const ProductListing = ({ productData }) => {
    const {clickHandler}=useContext(Cart2Context)
    const {wishListHandler}=useContext(WishListContext)
  return (
    <>
      <ul>
        {productData.map((data, i) => (
            <>
          <ProductCard {...data} key={i}  hideDetails />
           <button onClick={()=>clickHandler(data)}>Add to Cart</button>
          <button onClick={()=>wishListHandler(data)}>Add to wishList</button>
        <hr/>
        </>))}
      
      </ul>

    </>
  );
};

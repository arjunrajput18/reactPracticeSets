import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Cart2Context } from "../context/Cart2Context";
import { WishListContext } from "../context/WishListContext";

export const ProductCard = (dataList) => {
  const {clickHandler}=useContext(Cart2Context)
  const {wishListHandler}=useContext(WishListContext)

const {
  id,
  name,
  description,
  price,
  quantity,
  category,
  brand,
  hideDetails,
  hideWishList
}=dataList



// const showWishList=()=>{
// if(!hideWishList&&hideDetails){
//   return true
// }else{
//   return false
// }
// }
  //see above product no destructure.
  return (
    <>
      {
        <li key={id}>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>
            Price: <strong>{price}</strong>
          </p>
          {!hideDetails && (
            <div>
              <p>quantity:{quantity}</p>
              <p>category:{category}</p>
              <p>brand:{brand}</p>
            </div>
          )}

          {hideDetails && <NavLink to={`/product/${id}`}>Visit Item</NavLink>}
          {hideDetails &&<button onClick={()=>clickHandler(dataList)}>Add to Cart</button>}
          {!hideWishList &&<button onClick={()=>wishListHandler(dataList)}>Add to wishList</button>}
          <br></br>

          <br></br>
        </li>
      }
    </>
  );
};

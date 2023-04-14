import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Cart2Context } from "../context/Cart2Context";

export const ProductCard = (product) => {
const {clickHandler}=useContext(Cart2Context)
 //see above product no destructure.
    const {
        id,
        name,
        description,
        price,
        quantity,
        category,
        brand,
        hideDetails,
      }=product

  return (
    <>
      {
        <li key={id}>
          {!hideDetails && <h1>About</h1>}
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
          <br></br>
          {hideDetails&& <button onClick={()=>clickHandler(product)}>Add to Cart</button>}
          <br></br>
        </li>
      }
    </>
  );
};

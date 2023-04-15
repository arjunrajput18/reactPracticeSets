import { NavLink } from "react-router-dom";

export const ProductCard = ({
  id,
  name,
  description,
  price,
  quantity,
  category,
  brand,
  hideDetails,
}) => {
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
          <br></br>

          <br></br>
        </li>
      }
    </>
  );
};

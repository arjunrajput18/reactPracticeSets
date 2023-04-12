import React from "react";

export const ShowProduct3 = ({ name, price, quantity, rating }) => {
  return (
    <>
      <li
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "300px",
          border: "1px solid lightgrey",
          margin: "auto",
          padding: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div>
          <p>{name}</p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>

        <p>Rating: {rating}</p>
      </li>
    </>
  );
};

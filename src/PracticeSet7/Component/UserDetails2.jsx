import React, { useState } from "react";

export const UserDetails = ({ showData: { name, email, phone,address: { street, suite, city, zipcode } = {}} }) => {
  const [toggleData, setToggleData] = useState(false);
  const clickHandler = () => {
    setToggleData(!toggleData);
  };

  //  console.log("address",street)

  return (
    <>
      <h1>User</h1>
      <p>Name: {name}</p>
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>
      <button onClick={clickHandler}>{toggleData?"Hide Address":"Show Address"}</button>
      {toggleData && (
        <>
          <p>street: {street}</p>
          <p>suite: {suite}</p>
          <p>city: {city}</p>
          <p>zipcode: {zipcode}</p>
        </>
      )}
    </>
  );
};

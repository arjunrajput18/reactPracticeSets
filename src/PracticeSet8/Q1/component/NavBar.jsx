import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navLinks">
      <NavLink to="/" >Product</NavLink> {" "}
      <NavLink to="/cart">My Cart</NavLink> {" "}
      <NavLink to="/wishlist">My Wishlist</NavLink>
    </div>
  );
};

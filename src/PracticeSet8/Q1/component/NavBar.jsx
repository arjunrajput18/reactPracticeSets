import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const getActive = ({ isActive }) => ({
    color: isActive ? "red" : "",
  });
  return (
    <div className="navLinks">
      <NavLink to="/" style={getActive}>
        Product
      </NavLink>{" "}
      <NavLink to="/cart" style={getActive}>
        My Cart
      </NavLink>{" "}
      <NavLink to="/wishlist" style={getActive}>
        My Wishlist
      </NavLink>
    </div>
  );
};

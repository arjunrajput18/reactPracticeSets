import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar2 = () => {
  return (
<>
    <NavLink to={"/"}>Home</NavLink>{" "}
    <NavLink to="/done">Done Todo</NavLink>{" "}
    <NavLink to={"/open"}>Open Todo</NavLink>{" "}
</>
  )
}

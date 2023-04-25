import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <NavLink to="/">Inbox</NavLink>{" "}
        <NavLink to="/spam">Spam</NavLink>{" "}
        <NavLink to="/trash">Trash</NavLink>{" "}
    </>
  )
}

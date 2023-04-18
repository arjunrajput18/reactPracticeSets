import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BookContext } from '../context/BookContext'

export const NavBar1 = () => {
  const {favListData,readList}=useContext(BookContext)
  const styles = {
    width: "800px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    padding:"2rem"
  }
  
  return (
    <div style={styles}>
        <NavLink to="/">All Books</NavLink>{" "}
        <NavLink to="/favorites">Favorites ({favListData.length})</NavLink>{" "}
        <NavLink to="/read">Read ({readList.length})</NavLink>{" "}
        <NavLink to="/profile">Profile</NavLink>{" "}
    </div>
  )
}

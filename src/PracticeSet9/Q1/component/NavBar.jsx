import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { EmailContext } from '../context/EmailContext'

export const NavBar = () => {
    const {emailsData}=useContext(EmailContext)
    console.log(emailsData.length,"length")
    console.log(emailsData,"length")
  return (
  <>
  {(emailsData.emails?.length ?? 0)>0?<ul>
  <li><NavLink to="/inbox">Inbox</NavLink></li>
    <li><NavLink to="/sent">Sent</NavLink></li>
  </ul>:"Loading..."}
  </>
  )
}

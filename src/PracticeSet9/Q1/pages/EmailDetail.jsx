import React, { useContext } from 'react'
import { EmailContext } from '../context/EmailContext'
import { useParams } from 'react-router-dom'


export const EmailDetail = () => {
    const {emailsData}=useContext(EmailContext)
    const {emailId}=useParams()

    const FoundData=emailsData.emails.find(({id})=>id===Number(emailId))
    console.log(FoundData,"found")
  return (
   <>
   <li>
    <h2>{FoundData.subject}</h2>
    <p>From:{FoundData.sender}</p>
    <p>Message:{FoundData.message}</p>
   </li>
   </>
  )
}

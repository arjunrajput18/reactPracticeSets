import React, { useContext } from 'react'
import { EmailContext } from '../context/EmailContext'
import { useParams } from 'react-router-dom'


export const SentDetails = () => {
    const {emailsData}=useContext(EmailContext)
    const {sentId}=useParams()

    const FoundData=emailsData.sentEmails.find(({id})=>id===Number(sentId))
    console.log(FoundData,"found")
  return (
   <>
   <li>
    <h2>{FoundData.subject}</h2>
    <p>To:{FoundData.to}</p>
    <p>Message:{FoundData.message}</p>
   </li>
   </>
  )
}

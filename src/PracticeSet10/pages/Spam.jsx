import React, { useContext } from 'react'
import { MailContext } from '../context/MailContext'
import { MailCard } from '../component/MailCard'

export const Spam = () => {
  const {spamEmails}=useContext(MailContext)
  return (
    <div><ul style={{listStyleType:'none'}}> 
    {spamEmails.map((data)=><MailCard key={data.mId} data={data} noButton/>)}
    </ul></div>
  )
}

import React, { useContext } from 'react'
import { MailCard } from '../component/MailCard'
import { MailContext } from '../context/MailContext'

export const Trash = () => {
  const {trashEmails,mails}=useContext(MailContext)

  console.log(mails,"trash");
    return (
      <div>
      <ul style={{listStyleType:'none'}}> 
      {trashEmails.map((data)=><MailCard key={data.mId} data={data} noButton/>)}
      </ul>
        
      </div>
    )
  }
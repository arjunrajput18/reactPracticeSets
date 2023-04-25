import React, { useContext } from 'react'
import { MailContext } from '../context/MailContext'
import { useParams } from 'react-router-dom'
import { MailCard } from '../component/MailCard'

export const MailDetails = () => {
    const {mails}=useContext(MailContext)
    const {inboxId} =useParams()


console.log(mails,"m");
    const expandMail=mails.filter(({mId})=>mId.toString()===inboxId)
  return (
    <div>{

expandMail.map((data)=><MailCard data={data} showDetails/>)  
    }
    </div>
  )
}

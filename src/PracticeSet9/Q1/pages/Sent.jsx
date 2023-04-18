import React, { useContext } from 'react'
import { EmailContext } from '../context/EmailContext'
import { EmailCard } from '../component/EmailCard'

export const Sent = () => {
    const {emailsData}=useContext(EmailContext)
    console.log(emailsData.sentEmails,"a")

  return (
<>
<h2>Sent Page</h2>

<ul>
{emailsData.sentEmails.map((data)=><EmailCard {...data} read/>)}
</ul>
</>
  )
}

import React, { useContext } from 'react'
import { EmailContext } from '../context/EmailContext'
import { EmailCard } from '../component/EmailCard'

export const Inbox = () => {
    const {emailsData}=useContext(EmailContext)
    console.log(emailsData.emails,"a")
// const initialRead=emailsData.emails.reduce((acc,{read})=>read?acc+1:acc,0)
const  {read,unread}=emailsData.emails.reduce((acc,curr)=>curr.read?{...acc,read:acc.read+1}:{...acc,unread:acc.unread+1},{read:0,unread:0})
console.log(read,unread)
// console.log(initialRead,"i")
  return (
<>
<h2>Inbox Page</h2>
<p>Read Email:{read}</p>
<p>Unread Email:{unread}</p>
<ul>
{emailsData.emails.map((data)=><EmailCard {...data} inbox/>)}
</ul>
</>
  )
}

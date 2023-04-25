import React from 'react'
import { useContext } from 'react'
import { MailContext } from '../context/MailContext'
import { MailCard } from '../component/MailCard'

export const Inbox = () => {
const {EmailsData,checkBox}=useContext(MailContext)
console.log(checkBox)


const filterData=checkBox.length>0?EmailsData.filter((data)=>checkBox.every((ele)=>data[ele])):EmailsData



  return (
    <div>
    <ul style={{listStyleType:'none'}}> 
    {filterData.map((data)=><MailCard key={data.mId} data={data}/>)}
    </ul>
      
    </div>
  )
}

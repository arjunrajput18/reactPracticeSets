import React from 'react'

export const MailCard = ({data}) => {
  return (
   <>
    <li style={{border:"1px solid black"}} key={data.mId}>
    
   <h2>{data.subject}</h2>{" "}
    <p>{data.content}</p>
    </li>
   </>
  )
}

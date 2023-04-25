import React, { useContext } from 'react'
import { MailContext } from '../context/MailContext';
import { NavLink } from 'react-router-dom';

export const MailCard = ({data,noButton,showDetails}) => {

  const { starClickHandler,deleteHandler,spamHandler,markAsUnreadHandler} = useContext(MailContext);


  return (
   <>
    <li style={{border:"1px solid black"}} key={data.mId}>

  {!showDetails &&<h2>{data.subject}</h2>}{" "}
    <p>{data.content}</p>
  {!showDetails &&  <button onClick={()=>starClickHandler(data.mId)}>{data.isStarred?"unStar":"Star"}</button>}
   {!showDetails && <button onClick={()=>deleteHandler(data)}>Delete</button>}
   {!showDetails && <button onClick={()=>spamHandler(data)}>Spam</button>}
   {!showDetails && <button onClick={()=>markAsUnreadHandler(data)}>{data.unread?"Mark as unread":"Mark as read"}</button>}
{/* <a href={`/inbox/${inboxId}`}>View Details</a> */}
{ !showDetails&&<NavLink to={`/inbox/${data.mId}`}>View Details</NavLink>}
    </li>


   </>
  )
}

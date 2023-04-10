import React, { useState } from 'react'

export const FollowLogic = ({followData:{name,
    age,
    gender,
    email,
    occupation,
    followers,
    followedBy},setFollowData}) => {

const [typeDisabled,setTypeDisabled]=useState(false)
    const clickHandler=(e)=>{
        setFollowData((prev)=>({...prev,followers:followers+1}))
        setTypeDisabled(!typeDisabled)
    }

  return (
    <div>

<h2>{name}</h2>
<p><strong>Age</strong>: {age}</p>
<p><strong>gender</strong>: {gender}</p>
<p><strong>email</strong>: {email}</p>
<p><strong>occupation</strong>: {occupation}</p>
<p><strong>follower</strong>: {followers}</p>
<p><strong>followedBy</strong>: {followedBy}</p> 
 <button onClick={clickHandler}  disabled={typeDisabled}>Follow john</button> 
    </div>
  )
}

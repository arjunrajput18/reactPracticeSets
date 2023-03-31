import React from 'react'

export const UserProfile = ({data}) => {
    const {name,age,email}=data
  return (
    <div>name:{name}{" "}
    age:{age}{" "}
    email:{email}</div>
  )
}

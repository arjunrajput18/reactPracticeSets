import React from 'react'

export const StudentDetails = ({studentData}) => {

  return (
<>
    {studentData.reduce((acc,{marks})=>acc+marks,0)/studentData.length>80?<h1>Certification Approved</h1>:<h1>Certification Not Approved</h1>}
</>
  )
}

import React from 'react'
//   Given an array of objects representing people who donated money to the NGO. Each object consists of: id, name, amount. Build a React component that takes the data as props and shows the total donation collected on the DOM. Output should be in the format: Total Donation Collected: _amount_
export const TotalDonation = ({DonationData}) => {
  const total=DonationData.reduce((acc,{Donation})=>acc+Donation,0)
  return (
    <>
    <h1>Total Donation Collected:{total}</h1>
</>
  )
}


//cars.reduce((acc,{category})=>{
// if(acc[category]){
//  acc[category]++
// }else{
// acc[categore]=1
// }
// },{})
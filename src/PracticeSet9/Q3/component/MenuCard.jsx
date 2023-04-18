import React from 'react'

export const MenuCard = ({foodMenu}) => {
const {id,name,description,price,image,delivery_time}=foodMenu

//,is_vegetarian,is_spicy



  return (
<>
    <li key={id}>
    <img src={image} alt={"img4"} height={250} width={200}/>
        <p>Name:{name}</p>
        <p><b>desciption:</b> {description}</p>
        <p>price:{price}</p>
        <p>delivery time:{delivery_time}</p>    
</li>
</>
  )
}

import React from 'react'

export const Phones = ({products1}) => {

const data=products1.filter(({name})=>name==="mobile")

  return (
    <ul>
{data.map(({name,id,description,price})=><li key={id}>
name: {name } description:{description} price:{description}
</li>
)}
    </ul>
  )
}

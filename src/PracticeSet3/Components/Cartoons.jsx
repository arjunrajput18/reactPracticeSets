import React from 'react'

export const Cartoons = ({cartoons}) => {

  return (
<>
<ul>
{cartoons.map(({id, name, superpower, magnitude})=>magnitude>5?<li>name:{name},superpower: {superpower},magnitude:{magnitude}</li>:"")}
</ul>

</>
  )
}

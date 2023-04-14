import React from 'react'

export const Cartoons = ({cartoons}) => {
const MagnitudeMoreThan5=cartoons.filter(({magnitude})=>magnitude>5)
  return (
<>
<ul>
{MagnitudeMoreThan5.map(({id, name, superpower, magnitude})=><li key={id}>name: {name},superpower: {superpower},magnitude:{magnitude}</li>)}
</ul>

</>
  )
}

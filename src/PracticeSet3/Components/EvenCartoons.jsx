import React from 'react'

export const EvenCartoons = ({cartoons}) => {
  return (
    cartoons.map(({id, name, superpower, magnitude})=>magnitude%2===0?<h1>{name}</h1>:"")

  )
}

import React from 'react'

export const EvenCartoons = ({cartoons}) => {

const filteredCartoons=cartoons.filter(({magnitude})=>magnitude%2===0)

  return (
    filteredCartoons.map(({name})=><h1 key={name}>{name}</h1>)
  )
}

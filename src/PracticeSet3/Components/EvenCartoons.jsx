import React from 'react'

export const EvenCartoons = ({cartoons}) => {

const filteredCartoons=cartoons.filter(({magnitude})=>magnitude%2===0)

  return (
  
  <>

{ filteredCartoons.map(({id, name})=><h1 key={id}>{name}</h1>)
  }
  </>
    
  )
}

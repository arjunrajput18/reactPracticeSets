import React from 'react'

export const SuperPower = ({cartoons,data}) => {
  return (
    <ul>
        {

cartoons.map(({id, name, superpower, magnitude})=>data===superpower?<li>{name} - {superpower} - {magnitude}</li>:"")

        }
    </ul>
  )
}

import React, { useState } from 'react'

export const GameQ = () => {
const [CurrentLives,setCurrentLives]=useState(3)
    return (
    <>
    <h1>Current Lives :{CurrentLives}</h1>
    <button onClick={()=>setCurrentLives(0===CurrentLives?0:CurrentLives-1)}>Lose a Life</button>
    <h1>{!CurrentLives &&<p>Game over</p>}</h1>
    </>
  )
}

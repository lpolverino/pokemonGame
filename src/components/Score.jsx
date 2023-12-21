import React from 'react'
import "../styles/score.css"

const Score = ({actual, best}) => {
  return (
    <div className='score'>
        <h2>SCORES:</h2>
        <h3>Actual : {actual}</h3>
        <h3>Best : {best} </h3>
    </div>
  )
}

export default Score
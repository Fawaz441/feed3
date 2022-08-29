import React from 'react'
import line from "../assets/line.svg"

function Bonus() {
  return (
    <div className='bonus'>
    <img src={line} alt="bonus line"/>
    <h1>Make your first purchase within <span className="gradient">15 minutes </span>of registering to get a 40% bonus!</h1>
    <img src={line} alt="bonus line"/>

    </div>
  )
}

export default Bonus
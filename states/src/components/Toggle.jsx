import React, { useState } from 'react'

const Toggle = () => {
    const [display,setDisplay] = useState(true)

    const handleToggle = () => {
        setDisplay(!display)
    }
  return (
    <div>

         <button onClick={handleToggle}>Toggle</button>
      {
        display ? <h1>Sachin Sharma</h1> : null
      }
     
    </div>
  )
}

export default Toggle

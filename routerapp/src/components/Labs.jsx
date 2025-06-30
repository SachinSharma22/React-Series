import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate("/support");
    }
  return (
    <div>
        <div>
      This is Labs Page
    </div>
    <button onClick={clickHandler}>Goto support page</button>
    </div>
  )
}

export default Labs
